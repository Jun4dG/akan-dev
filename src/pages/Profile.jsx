import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import {
  PersonOutline,
  School,
  Lock,
  Edit,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import { useState } from "react";
import { mockProfileData } from "../data/mockSchedule";

const InfoItem = ({ label, value, icon: Icon }) => (
  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
    {Icon && (
      <Icon color="action" sx={{ fontSize: "1.2rem", mr: 0.5 }} />
    )}
    <Typography variant="body2" color="text.secondary" sx={{ minWidth: 100 }}>
      {label}:
    </Typography>
    <Typography variant="body1" sx={{ fontWeight: 500 }}>
      {value || "N/A"}
    </Typography>
  </Stack>
);

export default function Profile() {
  const [openPass, setOpenPass] = useState(false);
  const [openOther, setOpenOther] = useState(false);

  const fullName = `${mockProfileData.firstName} ${mockProfileData.middleName} ${mockProfileData.lastName}`;
  const homeAddress = `${mockProfileData.addressStreet}, ${mockProfileData.addressCity}, ${mockProfileData.addressProv}`;

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4, md: 6 },
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      {/* Profile Hero Section */}
      <Card sx={{ mb: 4, textAlign: "center", p: 4, boxShadow: 3, bgcolor: "primary.main" }}>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            bgcolor: "default",
            mx: "auto",
            mb: 2,
            fontSize: "2.5rem",
          }}
        >
          {mockProfileData.firstName[0]}
        </Avatar>
        <Typography variant="h4" component="h1" gutterBottom color="white">
          {fullName}
        </Typography>
        <Typography variant="h6" color="white">
          {mockProfileData.msusidNum}
        </Typography>
        <Typography variant="body1" color="white">
          {mockProfileData.course}
        </Typography>
      </Card>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item sx={{ xs: 12, md: 6 }}>
          {/* Personal Information Card */}
          <Card sx={{ mb: 4, boxShadow: 1 }}>
            <CardContent>
              <Stack direction="row" alignItems="center" mb={2}>
                <PersonOutline color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Personal Information</Typography>
              </Stack>
              <Divider sx={{ mb: 2 }} />
              <InfoItem label="Full Name" value={fullName} />
              <InfoItem label="Birthday" value={new Date(mockProfileData.birthday).toLocaleDateString()} />
              <InfoItem label="Birthplace" value={mockProfileData.birthplace} />
              <InfoItem label="Gender" value={mockProfileData.gender} />
              <InfoItem label="Civil Status" value={mockProfileData.civilStatus} />
              <InfoItem label="Religion" value={mockProfileData.religion} />
              <InfoItem label="Tribe" value={mockProfileData.tribe} />
              <InfoItem label="Nationality" value={mockProfileData.nationality} />
              <InfoItem label="Father" value={mockProfileData.fatherName} />
              <InfoItem label="Mother" value={mockProfileData.motherName} />
            </CardContent>
          </Card>
          {/* Academic Information Card */}
          <Card sx={{ mb: 4, boxShadow: 1 }}>
            <CardContent>
              <Stack direction="row" alignItems="center" mb={2}>
                <School color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Academic Information</Typography>
              </Stack>
              <Divider sx={{ mb: 2 }} />
              <InfoItem label="Degree" value={`${mockProfileData.course}, ${mockProfileData.curriculum}`} />
              <InfoItem label="Year Level" value={mockProfileData.yearLevel} />
              <InfoItem label="Academic Adviser" value={mockProfileData.adviser} />
              <InfoItem label="Scholarship" value={mockProfileData.scholarship} />
              <InfoItem label="Status" value={mockProfileData.acadStatus} />
              <InfoItem label="Admitted" value={`${mockProfileData.termAdmitted}, ${mockProfileData.yearAdmitted}`} />
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          {/* Contact and Account Information Card */}
          <Card sx={{ mb: 4, boxShadow: 1 }}>
            <CardContent>
              <Stack direction="row" alignItems="center" mb={2}>
                <Email color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Contact & Account</Typography>
                <IconButton size="small" onClick={() => setOpenOther(true)} sx={{ ml: "auto" }}>
                  <Edit fontSize="small" />
                </IconButton>
              </Stack>
              <Divider sx={{ mb: 2 }} />
              <InfoItem icon={LocationOn} label="Home Address" value={homeAddress} />
              <InfoItem icon={LocationOn} label="Campus Address" value={mockProfileData.campusAddress} />
              <InfoItem icon={Phone} label="Mobile" value={mockProfileData.mobileNumber} />
              <InfoItem icon={Email} label="Email" value={mockProfileData.emailAddress} />
              <InfoItem label="Family Income" value={`₱${mockProfileData.familyAnnualGrossIncome.toLocaleString()}`} />
            </CardContent>
          </Card>
          {/* Credentials Card */}
          <Card sx={{ mb: 4, boxShadow: 1 }}>
            <CardContent>
              <Stack direction="row" alignItems="center" mb={2}>
                <Lock color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Credentials</Typography>
              </Stack>
              <Divider sx={{ mb: 2 }} />
              <InfoItem label="Office 365" value={mockProfileData.office365Username} />
              <InfoItem label="Password" value="*********" />
              <InfoItem label="Date Created" value={mockProfileData.dateCreated.toLocaleDateString()} />
              <InfoItem label="Expiration Date" value={mockProfileData.expirationDate} />
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => setOpenPass(true)}
              >
                Change Password
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Dialog open={openPass} onClose={() => setOpenPass(false)} fullWidth>
        <DialogTitle>Update Password</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Old Password"
            type="password"
            fullWidth
          />
          <TextField
            margin="dense"
            label="New Password"
            type="password"
            fullWidth
          />
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPass(false)}>Cancel</Button>
          <Button variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
      {/* Update Other Info Dialog */}
      <Dialog open={openOther} onClose={() => setOpenOther(false)} fullWidth>
        <DialogTitle>Update Other Information</DialogTitle>
        <DialogContent>
          <TextField margin="dense" label="Street, Barangay" fullWidth />
          <TextField margin="dense" label="City" fullWidth />
          <TextField margin="dense" label="Province" fullWidth />
          <TextField margin="dense" label="Mobile Number" fullWidth />
          <TextField margin="dense" label="Email Address" fullWidth />
          <TextField margin="dense" label="Family Annual Income" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenOther(false)}>Cancel</Button>
          <Button variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
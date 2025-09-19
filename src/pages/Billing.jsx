import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Divider,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import gcash from "../assets/images/GCash.png"
import {
  mockEnrolledSubjects,
  generateBillingData,
} from "../data/mockSchedule";

// Mock data for filters
const semesters = ["1st Semester", "2nd Semester", "Summer"];
const academicYears = [2024, 2023, 2022];

export default function Billing() {
  const [semester, setSemester] = useState(semesters[0]);
  const [acadYear, setAcadYear] = useState(academicYears[0]);
  const [billingData, setBillingData] = useState([]);
  const [channel, setChannel] = useState("PH_GCASH");
  const [summary, setSummary] = useState({ totalDue: 0, totalPaid: 0, balance: 0 });

  const handleViewBilling = () => {
    // Generate billing data based on the mock enrolled subjects
    const { billingItems, summary } = generateBillingData(mockEnrolledSubjects);
    setBillingData(billingItems);
    setSummary(summary);
  };

  useEffect(() => {
    // Initial data load on component mount
    handleViewBilling();
  }, []);

  const paymentOptions = [
    { value: "PH_GCASH", label: "GCash", img: gcash },
    { value: "PH_PAYMAYA", label: "PayMaya", img: "https://placehold.co/100x40/f0f0f0/000?text=PAYMAYA" },
    { value: "PH_GRABPAY", label: "GrabPay", img: "https://placehold.co/100x40/f0f0f0/000?text=GRABPAY" },
    { value: "PH_SHOPEEPAY", label: "ShopeePay", img: "https://placehold.co/100x40/f0f0f0/000?text=SHOPEEPAY" },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, bgcolor: 'grey.50', minHeight: '100vh' }}>
      <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
        
        {/* Header */}
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" sx={{ color: 'grey.900' }}>
          Billing Overview
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Select your academic period to view your billing details and make a payment.
        </Typography>

        {/* Filters and Actions */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: 'center' }}>
            <Select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              size="small"
              sx={{ minWidth: 150 }}
            >
              {semesters.map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </Select>
            <Select
              value={acadYear}
              onChange={(e) => setAcadYear(e.target.value)}
              size="small"
              sx={{ minWidth: 100 }}
            >
              {academicYears.map((y) => (
                <MenuItem key={y} value={y}>{y}</MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              onClick={handleViewBilling}
              sx={{ flexGrow: 1, height: '40px' }}
            >
              View Billings
            </Button>
          </Box>
        </Paper>

        {/* Summary Cards */}
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">Total Due</Typography>
                <Typography variant="h5" fontWeight="bold" mt={1}>
                  ₱{summary.totalDue.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">Total Paid</Typography>
                <Typography variant="h5" fontWeight="bold" mt={1} color="success.main">
                  ₱{summary.totalPaid.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">Current Balance</Typography>
                <Typography variant="h5" fontWeight="bold" mt={1} color="error.main">
                  ₱{summary.balance.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* Billing Table - Desktop View */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Paper sx={{ width: "100%", overflow: "hidden", mb: 3, borderRadius: 2, boxShadow: 3 }}>
            <Table>
              <TableHead sx={{ bgcolor: 'grey.100' }}>
                <TableRow>
                  <TableCell>Billing Item</TableCell>
                  <TableCell>Amount Due</TableCell>
                  <TableCell>Amount Paid</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Course</TableCell>
                  <TableCell>Charged</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {billingData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      Choose a semester and academic year to view.
                    </TableCell>
                  </TableRow>
                ) : (
                  billingData.map((row, i) => (
                    <TableRow key={i} hover>
                      <TableCell>{row.item}</TableCell>
                      <TableCell>₱{row.amountDue.toLocaleString()}</TableCell>
                      <TableCell>₱{row.amountPaid.toLocaleString()}</TableCell>
                      <TableCell>₱{row.balance.toLocaleString()}</TableCell>
                      <TableCell>{row.course}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.charged}
                          color={row.charged === 'Yes' ? 'success' : 'error'}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </Paper>
        </Box>
        
        {/* Billing Cards - Mobile View */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          {billingData.length === 0 ? (
            <Paper sx={{ p: 4, textAlign: 'center', color: 'text.secondary', border: '2px dashed', borderColor: 'grey.300', borderRadius: 2 }}>
              Choose a semester and academic year to view.
            </Paper>
          ) : (
            <Grid container spacing={2}>
              {billingData.map((row, i) => (
                <Grid item xs={12} key={i}>
                  <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold">{row.item}</Typography>
                        <Chip
                          label={row.charged}
                          color={row.charged === 'Yes' || 'CHED' ? 'success' : 'error'}
                          size="small"
                        />
                      </Box>
                      <Divider sx={{ mb: 1 }} />
                      <Grid container spacing={1} mt={1}>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Amount Due</Typography>
                          <Typography variant="body1" fontWeight="medium">₱{row.amountDue.toLocaleString()}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Amount Paid</Typography>
                          <Typography variant="body1" fontWeight="medium">₱{row.amountPaid.toLocaleString()}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Balance</Typography>
                          <Typography variant="body1" fontWeight="medium" color="error.main">₱{row.balance.toLocaleString()}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">Course</Typography>
                          <Typography variant="body1" fontWeight="medium">{row.course}</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Payment Options */}
        <Box mb={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Pay your account balance
          </Typography>
          <Grid container spacing={2}>
            {paymentOptions.map((option) => (
              <Grid item xs={6} sm={3} key={option.value}>
                <Card
                  variant="outlined"
                  onClick={() => setChannel(option.value)}
                  sx={{
                    borderRadius: 2,
                    cursor: 'pointer',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: channel === option.value ? 'primary.main' : 'divider',
                    borderWidth: channel === option.value ? 2 : 1,
                    transition: 'border-color 0.2s',
                    '&:hover': {
                      borderColor: 'primary.light',
                      boxShadow: 3
                    },
                  }}
                >
                  <Box component="img" src={option.img} alt={option.label} sx={{ maxWidth: '100px', height: 'auto' }} />
                  <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary' }}>{option.label}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Proceed Button */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ maxWidth: 400, borderRadius: 2 }}
          >
            Proceed to Payment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
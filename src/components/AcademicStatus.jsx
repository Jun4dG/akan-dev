import React from 'react';
import { Card, CardContent, Typography, Stack, Divider, Box } from "@mui/material";
import { mockStudent } from "../data/mockSchedule";

const AcademicStatus = () => {
  const { yearLevel, academicStatus } = mockStudent;

  return (
    <Card sx={{ 
      boxShadow: 3, 
      borderRadius: 2, 
      bgcolor: 'background.paper', 
      color: 'text.primary' ,
      fontSize: '65%'
    }}>
      <Box sx={{
        p: 2,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}>
        <Typography variant="h7" component="div" fontWeight="bold">
          Current Academic Status
        </Typography>
      </Box>
      <Divider />
      <CardContent>
        <Stack>
          <Typography sx={{ fontSize: '100%' }}>
            <strong>Year:</strong> {yearLevel}
          </Typography>
          <Typography  sx={{ fontSize: '100%' }}>
            <strong>Status:</strong> {academicStatus.status}
          </Typography>
          <Typography  sx={{ fontSize: '100%' }}>
            <strong>Allowed Units:</strong> {academicStatus.allowedUnits}
          </Typography>
          <Typography sx={{ fontSize: '100%' }}>
            <strong>Enrolled Units:</strong> {academicStatus.enrolledUnits}
          </Typography>
          <Typography  sx={{ fontSize: '100%' }}>
            <strong>Remaining Units:</strong> {academicStatus.remainingUnits}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AcademicStatus;

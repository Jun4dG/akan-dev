import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import "../data/mockSchedule"
import { mockStudent } from '../data/mockSchedule';

const Notices = () => {
  return (
    <Card sx={{ 
      boxShadow: 3, 
      borderRadius: 2, 
      backgroundColor: 'background.paper', 
      color: 'text.primary',
      fontSize: '65%'
    }}>
    <Box sx={{
            p: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}>
    <Typography variant="h7" fontWeight="bold" gutterBottom>
        Account Expiration
    </Typography>
    </Box>
      <Divider />
      <CardContent>
        <Typography  sx={{ fontSize: '100%' }}>
          Your student akan account will expire on {mockStudent.accountExpiration}.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Notices;

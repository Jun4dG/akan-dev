import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import "../data/mockSchedule"
import { mockStudent } from '../data/mockSchedule';

const Notices = () => {
  return (
    <Card sx={{ 
      boxShadow: 3, 
      borderRadius: 2, 
      backgroundColor: 'background.paper', 
      color: 'text.primary' 
    }}>
    <Box sx={{
            p: 2,
            bgcolor: 'primary.dark',
            color: 'primary.contrastText',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
        Account Expiration
    </Typography>
    </Box>
      <Divider sx={{ mb: 2 }} />
      <CardContent>
        
        <Typography variant="body1">
          Your student akan account will expire on {mockStudent.accountExpiration}.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Notices;

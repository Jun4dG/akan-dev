import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Link, Box } from '@mui/material';

const ELibrary = () => {
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
        <Typography variant="h7" fontWeight="bold">
          e-Library Linkages
        </Typography>                
      </Box>
      <Divider />
      <CardContent sx={{ marginTop:'-10px'}}>
        <List >
            <ListItemText>
              <Link 
                href="https://www.msumain.edu.ph/library-mini-conference-room-venue-booking/" 
                target="_blank" 
                color="inherit" 
                underline="hover"
                fontSize="70%"
              >
                MSU Marawi Main Library
              </Link>
            </ListItemText>
            <ListItemText>
              <Link 
                href="https://www.ebsco.com" 
                target="_blank" 
                color="inherit" 
                underline="hover"
                fontSize="70%"
              >
                EBSCO Host: Research Databases
              </Link>
            </ListItemText>
            <ListItemText>
              <Link 
                href="http://iteslj.org" 
                target="_blank" 
                color="inherit" 
                underline="hover"
                fontSize="70%"
              >
                Internet TESL Journal
              </Link>
            </ListItemText>
            <ListItemText>
              <Link 
                href="http://www.bibliomania.com" 
                target="_blank" 
                color="inherit" 
                underline="hover"
                fontSize="70%"
              >
                Bibliomania
              </Link>
            </ListItemText>
            <ListItemText>
              <Link 
                href="https://www.ibsu.edu.ge/en/scientific-journal/" 
                target="_blank" 
                color="inherit" 
                underline="hover"
                fontSize="70%"
              >
                IBSU Scientific Journal
              </Link>
            </ListItemText>
        </List>
      </CardContent>
    </Card>
  );
};

export default ELibrary;

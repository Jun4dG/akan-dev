import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Link, Box } from '@mui/material';

const ELibrary = () => {
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
        <Typography variant="h6" fontWeight="bold">
          e-Library Linkages
        </Typography>                
      </Box>
      <Divider />
      <CardContent>
        <List dense>
          <ListItem>
            <ListItemText>
              <Link 
                href="https://www.msumain.edu.ph/library-mini-conference-room-venue-booking/" 
                target="_blank" 
                rel="noopener" 
                color="inherit" 
                underline="hover"
              >
                MSU Marawi Main Library
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link 
                href="https://www.ebsco.com" 
                target="_blank" 
                rel="noopener" 
                color="inherit" 
                underline="hover"
              >
                EBSCO Host: Research Databases
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link 
                href="http://iteslj.org" 
                target="_blank" 
                rel="noopener" 
                color="inherit" 
                underline="hover"
              >
                Internet TESL Journal
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link 
                href="http://www.bibliomania.com" 
                target="_blank" 
                rel="noopener" 
                color="inherit" 
                underline="hover"
              >
                Bibliomania
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link 
                href="https://www.ibsu.edu.ge/en/scientific-journal/" 
                target="_blank" 
                rel="noopener" 
                color="inherit" 
                underline="hover"
              >
                IBSU Scientific Journal
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default ELibrary;

import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
} from '@mui/material';
import styles from '../styles/Profile.module.css';
import EditIcon from '@mui/icons-material/Edit';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import StarIcon from '@mui/icons-material/Star';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+91 98765 43210',
  address: 'New Delhi, India',
  profilePic: 'https://source.unsplash.com/random/150x150?face',
};

const mockRides = [
  {
    id: 1,
    date: '2025-04-14',
    from: 'Home',
    to: 'Airport',
    amount: '₹850',
    status: 'Completed',
    rating: 5,
  },
  {
    id: 2,
    date: '2025-04-12',
    from: 'Office',
    to: 'Mall',
    amount: '₹350',
    status: 'Completed',
    rating: 4,
  },
  {
    id: 3,
    date: '2025-04-10',
    from: 'Airport',
    to: 'Hotel',
    amount: '₹750',
    status: 'Completed',
    rating: 5,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(mockUser);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.profilePage}>
      <Container maxWidth="lg">
        {/* Profile Header */}
        <Card className={styles.profileHeader}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={2}>
                <Avatar
                  src={userData.profilePic}
                  className={styles.profileAvatar}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h4" className={styles.userName}>
                  {userData.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Member since April 2025
                </Typography>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={handleEditToggle}
                  className={styles.editButton}
                >
                  {isEditing ? 'Save' : 'Edit Profile'}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Profile Content */}
        <Box sx={{ mt: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            className={styles.tabs}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Personal Info" icon={<PersonIcon />} iconPosition="start" />
            <Tab label="My Rides" icon={<LocalTaxiIcon />} iconPosition="start" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
                      value={userData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={styles.textField}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Card>
              <List>
                {mockRides.map((ride, index) => (
                  <React.Fragment key={ride.id}>
                    <ListItem className={styles.rideItem}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <Typography variant="subtitle2" color="textSecondary">
                            {ride.date}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography variant="body1">
                            {ride.from} → {ride.to}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                          <Typography variant="body1" className={styles.amount}>
                            {ride.amount}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Box display="flex" alignItems="center">
                            <Chip
                              label={ride.status}
                              color="success"
                              size="small"
                              className={styles.statusChip}
                            />
                            <Box display="flex" alignItems="center" ml={1}>
                              <StarIcon className={styles.ratingIcon} />
                              <Typography variant="body2">{ride.rating}</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </ListItem>
                    {index < mockRides.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Card>
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
};

export default Profile;

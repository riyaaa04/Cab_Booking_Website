import React, { useState } from 'react';
import sedanImage from '../assets/sedan.jpg';
import suvImage from '../assets/suv.jpg';
import luxuryImage from '../assets/luxury.png';
import hatchbackImage from '../assets/hatchback.jpeg';
import { Box, Container, Grid, Typography, Button, Snackbar, Alert } from '@mui/material';
import styles from '../styles/AvailableCabs.module.css';

const cabsData = [
  {
    id: 1,
    name: 'Economy Sedan',
    image: sedanImage,
    type: 'Sedan',
    capacity: '4 Passengers',
    ratePerKm: 12,
    basePrice: 150,
    features: ['AC', 'Music System', 'GPS Tracking']
  },
  {
    id: 2,
    name: 'Premium SUV',
    image: suvImage,
    type: 'SUV',
    capacity: '6 Passengers',
    ratePerKm: 18,
    basePrice: 250,
    features: ['AC', 'Music System', 'GPS Tracking', 'Leather Seats']
  },
  {
    id: 3,
    name: 'Luxury Sedan',
    image: luxuryImage,
    type: 'Luxury',
    capacity: '4 Passengers',
    ratePerKm: 22,
    basePrice: 350,
    features: ['AC', 'Premium Sound', 'GPS Tracking', 'Leather Seats', 'WiFi']
  },
  {
    id: 4,
    name: 'Mini Hatchback',
    image: hatchbackImage,
    type: 'Hatchback',
    capacity: '4 Passengers',
    ratePerKm: 10,
    basePrice: 100,
    features: ['AC', 'Music System', 'GPS Tracking']
  }
];

const AvailableCabs = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleBooking = (cab) => {
    setSnackbar({
      open: true,
      message: `Booking confirmed for ${cab.name}!`,
      severity: 'success'
    });
  };

  return (
    <Box className={styles.availableCabsPage}>
      <Container>
        <Typography variant="h3" className={styles.pageTitle}>
          Available Cabs
        </Typography>
        <Typography className={styles.pageSubtitle}>
          Choose from our wide range of comfortable and reliable cabs
        </Typography>

        <Grid container spacing={3} className={styles.cabsGrid}>
          {cabsData.map((cab) => (
            <Grid item xs={12} md={6} key={cab.id}>
              <Box className={styles.cabCard}>
                <Box className={styles.cabImageContainer}>
                  <img src={cab.image} alt={cab.name} className={styles.cabImage} />
                </Box>
                <Box className={styles.cabDetails}>
                  <Typography variant="h5" className={styles.cabName}>
                    {cab.name}
                  </Typography>
                  <Box className={styles.cabInfo}>
                    <Typography>Type: {cab.type}</Typography>
                    <Typography>Capacity: {cab.capacity}</Typography>
                    <Typography className={styles.rate}>
                      Rate: ₹{cab.ratePerKm}/km
                    </Typography>
                    <Typography>Base Fare: ₹{cab.basePrice}</Typography>
                  </Box>
                  <Box className={styles.features}>
                    <Typography variant="subtitle2">Features:</Typography>
                    <Box className={styles.featuresList}>
                      {cab.features.map((feature, index) => (
                        <span key={index} className={styles.feature}>
                          {feature}
                        </span>
                      ))}
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    className={styles.bookButton}
                    onClick={() => handleBooking(cab)}
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AvailableCabs;

import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
} from '@mui/material';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import BusinessIcon from '@mui/icons-material/Business';
import EventIcon from '@mui/icons-material/Event';
import styles from '../styles/Services.module.css';
import cabsImage from '../assets/cabs.png';

const serviceCards = [
  {
    title: 'City Taxi',
    icon: <LocalTaxiIcon sx={{ fontSize: '3rem', color: '#1976d2' }} />,
    description: 'Reliable and comfortable city rides for your daily commute. Available 24/7 with professional drivers.',
    features: ['24/7 Availability', 'Professional Drivers', 'Clean Vehicles', 'AC Cabs'],
  },
  {
    title: 'Airport Transfer',
    icon: <AirportShuttleIcon sx={{ fontSize: '3rem', color: '#1976d2' }} />,
    description: 'Hassle-free airport transfers with meet & greet service. Never miss your flight with our punctual service.',
    features: ['Flight Tracking', 'Meet & Greet', 'Fixed Rates', 'Luggage Assistance'],
  },
  {
    title: 'Corporate Travel',
    icon: <BusinessIcon sx={{ fontSize: '3rem', color: '#1976d2' }} />,
    description: 'Customized corporate travel solutions for your business needs. Special packages for regular clients.',
    features: ['Corporate Accounts', 'Bulk Booking', 'Monthly Billing', 'Priority Service'],
  },
  {
    title: 'Event Transportation',
    icon: <EventIcon sx={{ fontSize: '3rem', color: '#1976d2' }} />,
    description: 'Special event transportation for weddings, parties, and corporate events. Make your occasion special.',
    features: ['Event Planning', 'Multiple Vehicles', 'Decorated Cars', 'Professional Staff'],
  },
];

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <Box className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={cabsImage} alt="Taxi Service" className={styles.heroImage} />
        </div>
        <Container maxWidth="lg" className={styles.heroContent}>
          <Typography variant="h2" className={styles.heroTitle}>
            Our Services
          </Typography>
          <Typography variant="h5" className={styles.heroSubtitle}>
            Professional and Reliable Taxi Services
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {serviceCards.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className={styles.serviceCard}>
                <CardContent>
                  <Box className={styles.iconBox}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" className={styles.cardTitle}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className={styles.cardDescription}>
                    {service.description}
                  </Typography>
                  <Box className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <Typography key={idx} variant="body2" className={styles.feature}>
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    className={styles.bookButton}
                    fullWidth
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box className={styles.ctaSection}>
        <Container maxWidth="lg">
          <Typography variant="h3" className={styles.ctaTitle}>
            Ready to Book Your Ride?
          </Typography>
          <Typography variant="h6" className={styles.ctaSubtitle}>
            Experience the best taxi service in town
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            className={styles.ctaButton}
          >
            Contact Us Now
          </Button>
        </Container>
      </Box>
    </div>
  );
};

export default Services;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  ToggleButton,
  ToggleButtonGroup,
  Snackbar,
  Alert
} from '@mui/material';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TourIcon from '@mui/icons-material/Tour';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from '../styles/Home.module.css';
import heroCar from '../assets/hero-car.png';
import heroBg from '../assets/hero-bg.jpg';
import delhiImage from '../assets/delhi.png';
import lucknowImage from '../assets/lucknow.png';
import agraImage from '../assets/agra.png';
import backgroundVideo from '../assets/video.mp4';

const features = [
  {
    icon: <LocalTaxiIcon sx={{ fontSize: 40 }} />,
    title: 'Instant Booking',
    description: 'Book your ride instantly with our easy-to-use platform',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Safe Travel',
    description: 'All our drivers are verified and trained professionals',
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 40 }} />,
    title: 'Affordable Rates',
    description: 'Competitive pricing with no hidden charges',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for your convenience',
  },
];

const routes = [
  {
    title: 'Kanpur to Delhi',
    image: delhiImage,
    description: 'Best rates guaranteed'
  },
  {
    title: 'Kanpur to Lucknow',
    image: lucknowImage,
    description: 'Best rates guaranteed'
  },
  {
    title: 'Kanpur to Agra',
    image: agraImage,
    description: 'Best rates guaranteed'
  }
];

const testimonials = [
  {
    name: 'Rahul Kumar',
    location: 'Kanpur',
    rating: 5,
    text: 'Excellent service! The driver was professional and punctual. Will definitely use again for my trips to Delhi.',
    initial: 'R'
  },
  {
    name: 'Priya Singh',
    location: 'Delhi',
    rating: 4.5,
    text: 'Very comfortable journey from Kanpur to Delhi. The car was clean and well-maintained.',
    initial: 'P'
  },
  {
    name: 'Amit Sharma',
    location: 'Lucknow',
    rating: 5,
    text: 'Best taxi service I\'ve used. The booking process was simple and the rates were reasonable.',
    initial: 'A'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('outstation');
  const [outstationType, setOutstationType] = useState('oneway');
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    startDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    package: '4',
    tour: '',
    passengers: '1'
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const handleTripTypeChange = (event, newType) => {
    if (newType !== null) {
      setTripType(newType);
    }
  };

  const handleOutstationTypeChange = (event, newType) => {
    if (newType !== null) {
      setOutstationType(newType);
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        className={styles.heroSection}
        sx={{
          backgroundImage: `linear-gradient(to bottom, #333333, #000000), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <Container>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} md={6}>
              <Box className={styles.heroContent}>
                <Typography variant="h2" component="h1" gutterBottom>
                  Your Trusted Taxi Service in Kanpur
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                  Safe, reliable, and affordable rides at your fingertips
                </Typography>
                
                {/* Booking Form */}
                <Box className={styles.bookingForm}>
                  <Box className={styles.tripTypeSelector}>
                    <ToggleButtonGroup
                      exclusive
                      value={tripType}
                      onChange={handleTripTypeChange}
                      className={styles.toggleGroup}
                    >
                      <ToggleButton value="outstation" className={styles.toggleButton}>
                        <DirectionsCarIcon sx={{ mr: 1 }} />
                        Outstation
                      </ToggleButton>
                      <ToggleButton value="local" className={styles.toggleButton}>
                        <LocalTaxiIcon sx={{ mr: 1 }} />
                        Local Taxi
                      </ToggleButton>
                      <ToggleButton value="tour" className={styles.toggleButton}>
                        <TourIcon sx={{ mr: 1 }} />
                        Book Tour
                      </ToggleButton>
                    </ToggleButtonGroup>

                    {tripType === 'outstation' && (
                      <ToggleButtonGroup
                        value={outstationType}
                        exclusive
                        onChange={handleOutstationTypeChange}
                        className={styles.toggleGroup}
                        sx={{ mt: 1 }}
                      >
                        <ToggleButton value="oneway" className={styles.toggleButton}>
                          One Way
                        </ToggleButton>
                        <ToggleButton value="round" className={styles.toggleButton}>
                          Round Trip
                        </ToggleButton>
                      </ToggleButtonGroup>
                    )}
                  </Box>

                  {/* Conditional Form Fields */}
                  {tripType === 'outstation' && (
                    <>
                      <Box className={styles.formRow}>
                        <Box className={styles.formGroup}>
                          <label>Pickup Location:</label>
                          <input 
                            type="text" 
                            placeholder="Enter pickup location" 
                            value={formData.pickup}
                            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                          />
                        </Box>
                        <Box className={styles.formGroup}>
                          <label>Drop Location:</label>
                          <input 
                            type="text" 
                            placeholder="Enter drop location" 
                            value={formData.drop}
                            onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                          />
                        </Box>
                      </Box>
                      <Box className={styles.formRow}>
                        <Box className={styles.formGroup}>
                          <label>Start Date:</label>
                          <input 
                            type="date" 
                            value={formData.startDate}
                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          />
                        </Box>
                        <Box className={styles.formGroup}>
                          <label>Pick Up Time:</label>
                          <input 
                            type="time" 
                            value={formData.pickupTime}
                            onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                          />
                        </Box>
                      </Box>
                      {outstationType === 'round' && (
                        <>
                          <Box className={styles.formGroup}>
                            <label>Return Date:</label>
                            <input 
                              type="date" 
                              value={formData.returnDate}
                              onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                            />
                          </Box>
                          <Box className={styles.formGroup}>
                            <label>Return Time:</label>
                            <input 
                              type="time" 
                              value={formData.returnTime}
                              onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
                            />
                          </Box>
                        </>
                      )}
                    </>
                  )}

                  {tripType === 'local' && (
                    <>
                      <Box className={styles.formRow}>
                        <Box className={styles.formGroup}>
                          <label>Pick Up Location:</label>
                          <input 
                            type="text" 
                            placeholder="Your Location"
                            value={formData.pickup}
                            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                          />
                        </Box>
                        <Box className={styles.formGroup}>
                          <label>Package:</label>
                          <select 
                            className={styles.select}
                            value={formData.package}
                            onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                          >
                            <option value="4">4 Hours / 40 KM</option>
                            <option value="8">8 Hours / 80 KM</option>
                            <option value="12">12 Hours / 120 KM</option>
                          </select>
                      </Box>
                      </Box>
                      <Box className={styles.formRow}>
                        <Box className={styles.formGroup}>
                          <label>Pick Up Date:</label>
                          <input 
                            type="date"
                            value={formData.startDate}
                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          />
                        </Box>
                        <Box className={styles.formGroup}>
                          <label>Pick Up Time:</label>
                          <input 
                            type="time"
                            value={formData.pickupTime}
                            onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                          />
                        </Box>
                      </Box>
                    </>
                  )}

                  {tripType === 'tour' && (
                    <>
                      <Box className={styles.formGroup}>
                        <label>Select Tour:</label>
                        <select 
                          className={styles.select}
                          value={formData.tour}
                          onChange={(e) => setFormData({ ...formData, tour: e.target.value })}
                        >
                          <option value="">Choose a Tour Package</option>
                          <option value="agra">Agra Tour - Taj Mahal</option>
                          <option value="varanasi">Varanasi Religious Tour</option>
                          <option value="lucknow">Lucknow Heritage Tour</option>
                        </select>
                      </Box>
                      <Box className={styles.formGroup}>
                        <label>Number of Passengers:</label>
                        <select 
                          className={styles.select}
                          value={formData.passengers}
                          onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="4">4 People</option>
                          <option value="6">6 People</option>
                        </select>
                      </Box>
                      <Box className={styles.formGroup}>
                        <label>Start Date:</label>
                        <input 
                          type="date" 
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        />
                      </Box>
                    </>
                  )}

                  <Button 
                    variant="contained" 
                    color="primary"
                    className={styles.findButton}
                    fullWidth
                    onClick={() => {
                      // Validate required fields based on trip type
                      let isValid = true;
                      let requiredFields = [];

                      if (tripType === 'outstation') {
                        requiredFields = ['pickup', 'drop', 'startDate', 'pickupTime'];
                        if (outstationType === 'round') {
                          requiredFields.push('returnDate', 'returnTime');
                        }
                      } else if (tripType === 'local') {
                        requiredFields = ['pickup', 'package', 'startDate', 'pickupTime'];
                      } else if (tripType === 'tour') {
                        requiredFields = ['tour', 'passengers', 'startDate'];
                      }

                      for (const field of requiredFields) {
                        if (!formData[field]) {
                          isValid = false;
                          break;
                        }
                      }

                      if (!isValid) {
                        setSnackbar({
                          open: true,
                          message: 'Please fill in all required fields',
                          severity: 'error'
                        });
                        return;
                      }

                      // Navigate to available cabs page with form data
                      navigate('/available-cabs', {
                        state: {
                          tripType,
                          outstationType,
                          ...formData
                        }
                      });
                    }}
                  >
                    Book A Ride
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <img src={heroCar} alt="KTS Cabs Car" className={styles.heroCar} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Marquee Section */}
      <Box 
        sx={{ 
          overflow: 'hidden',
          background: '#f5f5f5',
          py: 3,
          width: '100%'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'fit-content',
            animation: 'marquee 20s linear infinite',
            '@keyframes marquee': {
              '0%': { transform: 'translateX(100vw)' },
              '100%': { transform: 'translateX(-100%)' }
            }
          }}
        >
          {[...Array(2)].map((_, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                whiteSpace: 'nowrap',
                mr: 4
              }}
            >
              <Typography 
                variant="h2" 
                component="span" 
                sx={{ 
                  mx: 4, 
                  color: '#1976d2', 
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', md: '3.5rem' }
                }}
              >
                RELIABLE
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                sx={{ 
                  mx: 4, 
                  color: '#1976d2', 
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', md: '3.5rem' }
                }}
              >
                FAST
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                sx={{ 
                  mx: 4, 
                  color: '#1976d2', 
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', md: '3.5rem' }
                }}
              >
                AFFORDABLE
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Features Section */}
      <Container className={styles.featuresSection}>
        <Typography variant="h3" component="h2" className={styles.sectionTitle}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                className={styles.featureCard} 
                elevation={2}
                ref={el => featureRefs.current[index] = el}
              >
                <Box className={styles.featureIcon}>{feature.icon}</Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Us Section */}
      <Box className={styles.aboutSection}>
        <video
          autoPlay
          muted
          loop
          className={styles.videoBackground}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <Box className={styles.overlay} />
        <Container className={styles.aboutContent}>
          <Typography variant="h3" component="h2" className={styles.aboutTitle} align="center">
            About KTS Cabs
          </Typography>
          <Typography variant="body1" className={styles.aboutDescription} align="center">
            With over a decade of experience in the transportation industry, KTS Cabs has become 
            the most trusted name in taxi services across Northern India. We pride ourselves on our 
            fleet of well-maintained vehicles, professional drivers, and commitment to customer satisfaction. 
            Whether you're traveling for business or leisure, we ensure a comfortable and safe journey 
            every time.
          </Typography>
          <Box className={styles.aboutStats}>
            <Box className={styles.statItem}>
              <Typography variant="h4" className={styles.statNumber}>
                10k+
              </Typography>
              <Typography variant="body1" className={styles.statLabel}>
                Happy Customers
              </Typography>
            </Box>
            <Box className={styles.statItem}>
              <Typography variant="h4" className={styles.statNumber}>
                500+
              </Typography>
              <Typography variant="body1" className={styles.statLabel}>
                Verified Drivers
              </Typography>
            </Box>
            <Box className={styles.statItem}>
              <Typography variant="h4" className={styles.statNumber}>
                15+
              </Typography>
              <Typography variant="body1" className={styles.statLabel}>
                Cities Covered
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Popular Routes Section */}
      <Box className={styles.routesSection}>
        <Container>
          <Typography variant="h3" component="h2" className={styles.sectionTitle}>
            Popular Routes
          </Typography>
          <Grid container spacing={4}>
            {routes.map((route, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className={styles.routeCard}>
                  <CardMedia
                    component="img"
                    className={styles.routeImage}
                    image={route.image}
                    alt={route.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {route.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {route.description}
                    </Typography>
                    <Button variant="contained" color="primary" className={styles.button}>
                      Check Rates
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box className={styles.testimonialsSection}>
        <Container>
          <Typography variant="h3" component="h2" className={styles.sectionTitle}>
            What Our Customers Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className={styles.testimonialCard}>
                  <Box className={styles.testimonialHeader}>
                    <Box className={styles.testimonialAvatar}>
                      {testimonial.initial}
                    </Box>
                    <Box className={styles.testimonialInfo}>
                      <Typography variant="h6" className={styles.testimonialName}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" className={styles.testimonialLocation}>
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.testimonialStars}>
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                    {testimonial.rating % 1 !== 0 && <StarHalfIcon />}
                  </Box>
                  <Typography className={styles.testimonialText}>
                    {testimonial.text}
                  </Typography>
                  <FormatQuoteIcon className={styles.testimonialQuote} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          sx={{
            '& .MuiAlert-message': {
              fontSize: '1.2rem',
              py: 1
            },
            '& .MuiAlert-icon': {
              fontSize: '2rem'
            },
            minWidth: '400px'
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
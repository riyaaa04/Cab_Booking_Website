import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from '../styles/Contact.module.css';
import cabsImage from '../assets/cabs2.png';

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ fontSize: '2.5rem', color: '#1976d2' }} />,
    title: 'Our Location',
    details: ['123 Business Avenue', 'New Delhi, India 110001'],
  },
  {
    icon: <PhoneIcon sx={{ fontSize: '2.5rem', color: '#1976d2' }} />,
    title: 'Phone Numbers',
    details: ['+91 96211 37830', '+91 90268 35325'],
  },
  {
    icon: <EmailIcon sx={{ fontSize: '2.5rem', color: '#1976d2' }} />,
    title: 'Email Address',
    details: ['info@ktscabs.com', 'support@ktscabs.com'],
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: '2.5rem', color: '#1976d2' }} />,
    title: 'Working Hours',
    details: ['24 Hours', '7 Days a Week'],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show loading state on button
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate API call with timeout
    setTimeout(() => {
      setSnackbar({
        open: true,
        message: 'Message sent successfully! We will get back to you soon.',
        severity: 'success',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset button
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 1500); // 1.5 second delay to simulate API call
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <Box className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={cabsImage} alt="Contact KTS Cabs" className={styles.heroImage} />
        </div>
        <Container maxWidth="lg" className={styles.heroContent}>
          <Typography variant="h2" className={styles.heroTitle}>
            Contact Us
          </Typography>
          <Typography variant="h5" className={styles.heroSubtitle}>
            We'd Love to Hear From You
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Contact Info Cards */}
        <Box className={styles.infoSection}>
          <Grid container spacing={4}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className={styles.infoCard}>
                  <CardContent>
                    <Box className={styles.iconBox}>
                      {info.icon}
                    </Box>
                    <Typography variant="h6" className={styles.infoTitle}>
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography key={idx} variant="body1" className={styles.infoDetail}>
                        {detail}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Form Section */}
        <Box className={styles.formSection}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" className={styles.sectionTitle}>
                Get in Touch
              </Typography>
              <Typography variant="body1" className={styles.sectionSubtitle}>
                Have any questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </Typography>
              <form onSubmit={handleSubmit} className={styles.form}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      className={styles.submitButton}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0011089455697!2d77.22886837538795!3d28.628917475663184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1682338871375!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KTS Cabs Location"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
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
    </div>
  );
};

export default Contact;

import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import styles from '../styles/About.module.css';
import cabsImage from '../assets/cabs2.png';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const stats = [
  { icon: <EmojiTransportationIcon />, count: '500+', label: 'Vehicles' },
  { icon: <GroupsIcon />, count: '1000+', label: 'Happy Customers' },
  { icon: <LocationOnIcon />, count: '50+', label: 'Cities' },
  { icon: <StarIcon />, count: '4.8', label: 'Rating' },
];

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://source.unsplash.com/random/200x200?face-1',
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    image: 'https://source.unsplash.com/random/200x200?face-2',
  },
  {
    name: 'Michael Brown',
    role: 'Fleet Manager',
    image: 'https://source.unsplash.com/random/200x200?face-3',
  },
  {
    name: 'Emily Davis',
    role: 'Customer Relations',
    image: 'https://source.unsplash.com/random/200x200?face-4',
  },
];

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <Box className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={cabsImage} alt="About KTS Cabs" className={styles.heroImage} />
        </div>
        <Container maxWidth="lg" className={styles.heroContent}>
          <Typography variant="h2" className={styles.heroTitle}>
            About Us
          </Typography>
          <Typography variant="h5" className={styles.heroSubtitle}>
            Your Trusted Transportation Partner
          </Typography>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg">
        <Box className={styles.storySection}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" className={styles.sectionTitle}>
                Our Story
              </Typography>
              <Typography variant="body1" className={styles.storyText}>
                Founded in 2020, KTS Cabs has grown from a small local taxi service to one of the most trusted transportation providers in the region. Our journey began with a simple mission: to provide safe, reliable, and comfortable transportation services to our community.
              </Typography>
              <Typography variant="body1" className={styles.storyText}>
                Today, we operate a fleet of over 500 vehicles and serve thousands of satisfied customers. Our commitment to excellence, safety, and customer satisfaction remains at the heart of everything we do.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={styles.missionBox}>
                <Typography variant="h4" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  To revolutionize the transportation industry by providing exceptional service, ensuring safety, and embracing innovation while maintaining the highest standards of customer satisfaction.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Stats Section */}
        <Box className={styles.statsSection}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card className={styles.statCard}>
                  <CardContent>
                    <Box className={styles.statIcon}>
                      {React.cloneElement(stat.icon, { sx: { fontSize: '2.5rem', color: '#1976d2' } })}
                    </Box>
                    <Typography variant="h4" className={styles.statCount}>
                      {stat.count}
                    </Typography>
                    <Typography variant="body1" className={styles.statLabel}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box className={styles.teamSection}>
          <Typography variant="h3" className={styles.sectionTitle} align="center">
            Meet Our Team
          </Typography>
          <Typography variant="body1" className={styles.sectionSubtitle} align="center">
            The dedicated people behind our success
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className={styles.teamCard}>
                  <CardContent>
                    <Avatar
                      src={member.image}
                      className={styles.teamAvatar}
                    />
                    <Typography variant="h6" className={styles.teamName}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" className={styles.teamRole}>
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default About;

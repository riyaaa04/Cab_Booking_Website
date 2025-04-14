import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from '../styles/Footer.module.css';
import logoCar from '../assets/logo-car.png';

const Footer = () => {
  return (
    <Box className={styles.footer} sx={{ bgcolor: '#000000', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className={styles.footerTitle}>
              Company
            </Typography>
            <Box className={styles.linkList}>
              <Link href="/who-we-are" className={styles.footerLink}>
                Who we are
              </Link>
              <Link href="/contact" className={styles.footerLink}>
                Contact Us
              </Link>
              <Link href="/faq" className={styles.footerLink}>
                Faq
              </Link>
            </Box>
          </Grid>

          {/* Our Policy */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className={styles.footerTitle}>
              Our Policy
            </Typography>
            <Box className={styles.linkList}>
              <Link href="/terms" className={styles.footerLink}>
                Terms & Conditions
              </Link>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
              <Link href="/refund" className={styles.footerLink}>
                Refund Policy
              </Link>
            </Box>
          </Grid>

          {/* Business With Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className={styles.footerTitle}>
              Business With Us
            </Typography>
            <Box className={styles.linkList}>
              <Link href="/drive" className={styles.footerLink}>
                Drive With Us
              </Link>
              <Link href="/attach" className={styles.footerLink}>
                Attach Taxi
              </Link>
              <Link href="/partner" className={styles.footerLink}>
                Partner Login
              </Link>
            </Box>
          </Grid>

          {/* Connects */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className={styles.footerTitle}>
              Connects
            </Typography>
            <Box className={styles.linkList}>
              <Link href="mailto:info@ktscabs.com" className={styles.footerLink}>
                info@ktscabs.com
              </Link>
              <Link href="tel:+916307034277" className={styles.footerLink}>
                +916307034277
              </Link>
              <Link href="tel:+919621137830" className={styles.footerLink}>
                +919621137830
              </Link>
              <Link href="tel:+919026835325" className={styles.footerLink}>
                +919026835325
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box className={styles.footerBottom}>
          <Typography variant="body2" align="center" sx={{ py: 2 }}>
            Copyright © 2025-2026. KTS Cabs Pvt. Ltd. All rights Reserved. Designed & Developed by Duplex Technologies
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

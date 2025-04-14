import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';

const AuthDialog = ({ open, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [loading, setLoading] = useState(false);

  const handlePhoneSubmit = async () => {
    if (phoneNumber.length !== 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    setLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
      // In a real app, you would make an API call to send OTP
    }, 1500);
  };

  const handleOtpSubmit = async () => {
    if (otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    setLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        phoneNumber,
        isAuthenticated: true,
        loginTime: new Date().toISOString()
      }));
      onClose(true); // true indicates successful login
    }, 1500);
  };

  const handleClose = () => {
    setPhoneNumber('');
    setOtp('');
    setStep('phone');
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        {step === 'phone' ? 'Login / Sign Up' : 'Enter OTP'}
      </DialogTitle>
      <DialogContent>
        {step === 'phone' ? (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" gutterBottom>
              Please enter your phone number to continue
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              label="Phone Number"
              type="tel"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="Enter 10 digit number"
              disabled={loading}
            />
          </Box>
        ) : (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" gutterBottom>
              Enter the 6-digit OTP sent to {phoneNumber}
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              label="OTP"
              type="text"
              fullWidth
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="Enter 6 digit OTP"
              disabled={loading}
            />
            <Button
              sx={{ mt: 1 }}
              onClick={() => setStep('phone')}
              disabled={loading}
            >
              Change Phone Number
            </Button>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={step === 'phone' ? handlePhoneSubmit : handleOtpSubmit}
          variant="contained"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} />
          ) : step === 'phone' ? (
            'Get OTP'
          ) : (
            'Verify OTP'
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthDialog;

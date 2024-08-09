import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // Dark blue for primary elements
      contrastText: '#ffffff', // White text on primary buttons
    },
    secondary: {
      main: '#1976d2', // Medium blue for secondary elements
      contrastText: '#ffffff', // White text on secondary buttons
    },
    background: {
      paper: '#e3f2fd', // Light blue for paper components
      default: '#bbdefb', // Lighter blue for the default background
    },
    text: {
      primary: '#0d47a1', // Dark blue text color
      secondary: '#1976d2', // Medium blue text color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#0d47a1', // Dark blue for H4 headings
    },
    body1: {
      fontSize: '1rem',
      color: '#0d47a1', // Dark blue for primary body text
    },
    button: {
      textTransform: 'none', // Disable uppercase transformation on buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Custom button border radius
          padding: '8px 16px', // Custom button padding
          backgroundColor: '#0d47a1', // Dark blue background for buttons
          color: '#ffffff', // White text for buttons
          '&:hover': {
            backgroundColor: '#1565c0', // Slightly lighter blue on hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px', // Add margin to the bottom of text fields
          backgroundColor: '#e3f2fd', // Light blue background for text fields
          '& .MuiInputBase-root': {
            color: '#0d47a1', // Dark blue text in text fields
          },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0d47a1', // Dark blue border for text fields
          },
          '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1565c0', // Slightly lighter blue border on hover
          },
        },
      },
    },
  },
});

export default theme;

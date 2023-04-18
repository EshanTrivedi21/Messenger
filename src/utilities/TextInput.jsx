import { TextField, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#151515",
    },
    text: {
      primary: "#151515",
    },
  },
});

const TextInput = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField label={label} fullWidth />
    </ThemeProvider>
  );
};

export default TextInput;

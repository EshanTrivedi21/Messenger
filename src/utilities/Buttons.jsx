import { Button, createTheme, ThemeProvider } from "@mui/material";
import Typography from "./Typography";

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

const PrimaryButton = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        sx={{ width: "250px", height: "40px"}}
      >
        <Typography variant="button" content={label} />
      </Button>
    </ThemeProvider>
  );
};

export { PrimaryButton };

import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Fab, Paper } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Hero from "./components/Hero";
import { About } from "./components/About";
import Experience from "./components/Experience";

function App() {
  const [darkMode, setDarkMode] = useState(false); // default to light mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: darkMode ? "#90caf9" : "#1976d2" },
          background: {
            default: darkMode ? "#121212" : "#f5f5f5",
            paper: darkMode ? "#1e1e1e" : "#fff",
          },
        },
        shape: { borderRadius: 16 },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          bgcolor: 'background.default',
          p: { xs: 1, md: 4 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            maxWidth: 1300,
            mx: 'auto',
          }}
        >
          {/* Hero Card */}
          <Paper elevation={6} sx={{
            borderRadius: 4,
            p: 3,
            minWidth: { xs: '90vw', md: 340 },
            maxWidth: 400,
            minHeight: 420,
            boxShadow: 6,
            bgcolor: 'background.paper',
            flex: '0 0 340px',
          }}>
            <Hero />
          </Paper>
          {/* About Card */}
          <Paper elevation={4} sx={{
            borderRadius: 4,
            p: 3,
            minWidth: { xs: '90vw', md: 320 },
            maxWidth: 400,
            minHeight: 200,
            boxShadow: 4,
            bgcolor: 'background.paper',
            flex: '0 0 320px',
          }}>
            <About />
          </Paper>
          {/* Experience Card */}
          <Paper elevation={4} sx={{
            borderRadius: 4,
            p: 3,
            minWidth: { xs: '90vw', md: 320 },
            maxWidth: 400,
            minHeight: 200,
            boxShadow: 4,
            bgcolor: 'background.paper',
            flex: '0 0 320px',
          }}>
            <Experience />
          </Paper>
        </Box>
      </Box>
      {/* Floating dark mode toggle button */}
      <Fab
        color="primary"
        onClick={() => setDarkMode((prev) => !prev)}
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 2000,
        }}
        aria-label="toggle dark mode"
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </Fab>
    </ThemeProvider>
  );
}

export default App;

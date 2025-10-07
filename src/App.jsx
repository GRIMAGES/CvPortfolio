import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Grid, Card, CardContent, Fab } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TravelAdvisor from "./components/TravelAdvisor";
import Footer from "./components/Footer";

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

  // Dashboard fixed size (e.g., 100vh minus some margin)
  const DASHBOARD_HEIGHT = '92vh';
  const DASHBOARD_WIDTH = '98vw';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: DASHBOARD_HEIGHT,
          width: DASHBOARD_WIDTH,
          mx: 'auto',
          my: 2,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            height: '100%',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Profile/Hero - Large Card */}
          <Grid item xs={12} md={6} lg={4} sx={{ height: { xs: '33%', md: '50%' } }}>
            <Card sx={{ height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <CardContent sx={{ p: 1, width: '100%', height: '100%' }}>
                <Box sx={{ transform: 'scale(0.7)', transformOrigin: 'top center', height: '100%', width: '100%' }}>
                  <Hero />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* About */}
          <Grid item xs={12} md={6} lg={4} sx={{ height: { xs: '33%', md: '50%' } }}>
            <Card sx={{ height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <CardContent sx={{ p: 1, width: '100%', height: '100%' }}>
                <Box sx={{ transform: 'scale(0.85)', transformOrigin: 'top center', height: '100%', width: '100%' }}>
                  <About />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* Skills */}
          <Grid item xs={12} md={6} lg={4} sx={{ height: { xs: '33%', md: '50%' } }}>
            <Card sx={{ height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <CardContent sx={{ p: 1, width: '100%', height: '100%' }}>
                <Box sx={{ transform: 'scale(0.85)', transformOrigin: 'top center', height: '100%', width: '100%' }}>
                  <Skills />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* Projects */}
          <Grid item xs={12} md={6} lg={4} sx={{ height: { xs: '33%', md: '50%' } }}>
            <Card sx={{ height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <CardContent sx={{ p: 1, width: '100%', height: '100%' }}>
                <Box sx={{ transform: 'scale(0.85)', transformOrigin: 'top center', height: '100%', width: '100%' }}>
                  <Projects />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* TravelAdvisor */}
          <Grid item xs={12} md={6} lg={4} sx={{ height: { xs: '33%', md: '50%' } }}>
            <Card sx={{ height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <CardContent sx={{ p: 1, width: '100%', height: '100%' }}>
                <Box sx={{ transform: 'scale(0.85)', transformOrigin: 'top center', height: '100%', width: '100%' }}>
                  <TravelAdvisor />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* Footer */}
          <Grid item xs={12} md={6} lg={4} sx={{ height: { xs: '33%', md: '50%' } }}>
            <Card sx={{ height: '100%', minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <CardContent sx={{ p: 1, width: '100%', height: '100%' }}>
                <Box sx={{ transform: 'scale(0.85)', transformOrigin: 'top center', height: '100%', width: '100%' }}>
                  <Footer />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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

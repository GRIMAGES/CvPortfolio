import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Fab } from "@mui/material";
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
  const DASHBOARD_HEIGHT = '96vh';
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
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.7fr 1fr 1.3fr' },
          gridTemplateRows: { xs: 'repeat(6, 1fr)', md: '0.6fr 1fr 0.7fr' },
          gap: 2,
          gridTemplateAreas: {
            xs: `
              "hero"
              "about"
              "skills"
              "projects"
              "travel"
              "footer"
            `,
            md: `
              "hero skills travel"
              "about projects travel"
              "footer footer footer"
            `,
          },
          bgcolor: 'background.default',
          p: 2,
        }}
      >
        {/* Hero - Small */}
        <Box sx={{ gridArea: 'hero', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', p: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: 140 }}>
          <Hero />
        </Box>
        {/* About - Small */}
        <Box sx={{ gridArea: 'about', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', p: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', maxHeight: 180 }}>
          <Box sx={{ width: '100%', height: '100%', maxHeight: 160, overflow: 'auto', transform: { md: 'scale(0.85)' }, transformOrigin: 'top left' }}>
            <About />
          </Box>
        </Box>
        {/* Skills - Medium */}
        <Box sx={{ gridArea: 'skills', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: 220 }}>
          <Box sx={{ width: '100%', height: '100%', maxHeight: 200, overflow: 'auto', transform: { md: 'scale(0.9)' }, transformOrigin: 'top left' }}>
            <Skills />
          </Box>
        </Box>
        {/* Projects - Medium */}
        <Box sx={{ gridArea: 'projects', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: 220 }}>
          <Box sx={{ width: '100%', height: '100%', maxHeight: 200, overflow: 'auto', transform: { md: 'scale(0.9)' }, transformOrigin: 'top left' }}>
            <Projects />
          </Box>
        </Box>
        {/* TravelAdvisor - Large */}
        <Box sx={{ gridArea: 'travel', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 320, minWidth: 320 }}>
          <Box sx={{ width: '100%', height: '100%', minHeight: 280, minWidth: 280, overflow: 'auto', transform: { md: 'scale(1.05)' }, transformOrigin: 'top left' }}>
            <TravelAdvisor />
          </Box>
        </Box>
        {/* Footer - Full width */}
        <Box sx={{ gridArea: 'footer', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', height: '100%', transform: { md: 'scale(0.95)' }, transformOrigin: 'top left' }}>
            <Footer />
          </Box>
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

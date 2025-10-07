import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Fab } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { About, Education } from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TravelAdvisor from "./components/TravelAdvisor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

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
          gridTemplateRows: { xs: 'repeat(7, 1fr)', md: '1.2fr 0.7fr 1fr 0.5fr' },
          gap: 2,
          gridTemplateAreas: {
            xs: `
              "hero"
              "about"
              "education"
              "skills"
              "projects"
              "travel"
              "footer"
            `,
            md: `
              "hero about travel"
              "hero education travel"
              "skills projects travel"
              "footer footer footer"
            `,
          },
          bgcolor: 'background.default',
          p: 2,
        }}
      >
        {/* Hero - Vertical */}
        <Box sx={{ gridArea: 'hero', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', maxWidth: 220, minHeight: 260, margin: '0 auto' }}>
          <Hero />
        </Box>
        {/* About - Plain */}
        <Box sx={{ gridArea: 'about', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', maxHeight: 180 }}>
          <About />
        </Box>
        {/* Education - Plain */}
        <Box sx={{ gridArea: 'education', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', maxHeight: 180 }}>
          <Education />
        </Box>
        {/* Skills - Medium */}
        <Box sx={{ gridArea: 'skills', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: 220 }}>
          <Skills />
        </Box>
        {/* Projects - Medium */}
        <Box sx={{ gridArea: 'projects', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: 220 }}>
          <Projects />
        </Box>
        {/* TravelAdvisor - Large */}
        <Box sx={{ gridArea: 'travel', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 320, minWidth: 320 }}>
          <TravelAdvisor />
        </Box>
        {/* Footer - Compact and centered */}
        <Box sx={{ gridArea: 'footer', minHeight: 0, overflow: 'hidden', borderRadius: 3, boxShadow: 2, bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 60, p: 0 }}>
          <Footer />
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

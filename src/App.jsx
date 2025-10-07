import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Fab, Paper } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Hero from "./components/Hero";
import { About } from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
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
        shape: { borderRadius: 0 },
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
          p: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            maxWidth: 1600,
            ml: { xs: 0, md: 2 },
          }}
        >
          {/* Hero Card */}
          <Paper elevation={6} sx={{
            borderRadius: 0,
            p: 3,
            minWidth: { xs: '90vw', md: 320 },
            maxWidth: 340,
            minHeight: 420,
            boxShadow: 6,
            bgcolor: 'background.paper',
            flex: '0 0 320px',
          }}>
            <Hero />
          </Paper>
          {/* About Card */}
          <Paper elevation={4} sx={{
            borderRadius: 0,
            p: 3,
            minWidth: { xs: '90vw', md: 300 },
            maxWidth: 340,
            minHeight: 200,
            boxShadow: 4,
            bgcolor: 'background.paper',
            flex: '0 0 300px',
          }}>
            <About />
          </Paper>
          {/* Experience Card */}
          <Paper elevation={4} sx={{
            borderRadius: 0,
            p: 3,
            minWidth: { xs: '90vw', md: 340 },
            maxWidth: 360,
            minHeight: 200,
            boxShadow: 4,
            bgcolor: 'background.paper',
            flex: '0 0 340px',
          }}>
            <Experience />
          </Paper>
          {/* Skills Card - same width as Experience to sit beside it */}
          <Paper elevation={4} sx={{
            borderRadius: 0,
            p: 3,
            minWidth: { xs: '90vw', md: 340 },
            maxWidth: 360,
            minHeight: 220,
            boxShadow: 4,
            bgcolor: 'background.paper',
            flex: '0 0 340px',
          }}>
            <Skills />
          </Paper>
        </Box>
      </Box>
      {/* Footer / Contact Card - fixed bottom-right (vertical) */}
      <Paper elevation={6} sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: { xs: '92vw', md: 360 },
        maxWidth: 380,
        boxShadow: 8,
        borderRadius: 0,
        p: 0,
        zIndex: 1500,
        bgcolor: 'background.paper',
      }}>
        <Footer />
      </Paper>
      {/* Floating dark mode toggle button */}
      <Fab
        color="primary"
        onClick={() => setDarkMode((prev) => !prev)}
        sx={{
          position: "fixed",
          bottom: 32,
          right: { xs: 32, md: 380 + 48 },
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

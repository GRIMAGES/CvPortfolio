import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Container, Card, CardContent, Fab, Box } from "@mui/material";
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 6, mb: 4 }}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" gap={4}>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <TravelAdvisor />
              <Footer />
            </Box>
          </CardContent>
        </Card>
      </Container>
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

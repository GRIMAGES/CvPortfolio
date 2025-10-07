import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Container, Grid, Card, CardContent, Fab } from "@mui/material";
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
      <Container maxWidth="xl" sx={{ mt: 6, mb: 4 }}>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={8} lg={7}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Hero />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <About />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Skills />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Projects />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <TravelAdvisor />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Footer />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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

import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Container, Grid, Card, CardContent, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TravelAdvisor from "./components/TravelAdvisor";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
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
      <Topbar />
      <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card>
              <CardContent sx={{ position: "relative" }}>
                <IconButton
                  onClick={() => setDarkMode((prev) => !prev)}
                  sx={{ position: "absolute", top: 8, right: 8 }}
                  color="inherit"
                  aria-label="toggle dark mode"
                >
                  {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <Hero />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <About />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Skills />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Projects />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
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
    </ThemeProvider>
  );
}

export default App;

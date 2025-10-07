import profileImg from "./image/profile1.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@mui/material/IconButton";

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: 0,
      padding: 0,
      background: 'none', // No gradient
      borderRadius: 16,
      boxShadow: '0 2px 12px 0 rgba(33,150,243,0.08)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 340,
      margin: '0 auto',
      marginTop: 8,
      marginBottom: 8,
      border: '1px solid #e3e3e3',
    }}>
      <img
        src={profileImg}
        alt="William"
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #1976d2',
          boxShadow: '0 2px 8px 0 rgba(33,150,243,0.10)',
          marginTop: 16,
          marginBottom: 10,
        }}
      />
      <div style={{ padding: '8px 0', flex: 1, textAlign: 'center' }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#1976d2', letterSpacing: 0.5 }}>William Duncan Gonzales</h1>
        <h2 style={{ fontSize: 13, fontWeight: 500, color: '#333', margin: 0, marginTop: 2 }}>Web Developer & Designer</h2>
        <p style={{ fontSize: 11, color: '#555', margin: 0, marginTop: 4, lineHeight: 1.4 }}>
          I create sleek, modern, and functional websites with clean designs and smooth user experiences.
        </p>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
          <Chip label="Open to Work" color="success" size="small" />
          <IconButton aria-label="email" color="primary" href="mailto:youremail@example.com">
            <EmailIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener"
          >
            View LinkedIn
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<DescriptionIcon />}
            href="/cv.pdf"
            target="_blank"
            rel="noopener"
          >
            View CV
          </Button>
        </Stack>
      </div>
    </section>
  );
}

export default Hero;

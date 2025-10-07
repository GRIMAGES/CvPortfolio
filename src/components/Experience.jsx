import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ExampleTech",
    companyUrl: "https://example.com",
    years: "2023 – Present",
    desc: "Building modern React web apps and collaborating with UI/UX teams.",
    logo: null, // You can use a logo URL here
    initials: "ET",
  },
  {
    title: "Web Developer Intern",
    company: "WebStart",
    companyUrl: "https://webstart.com",
    years: "2022 – 2023",
    desc: "Worked on landing pages, bug fixes, and learned agile teamwork.",
    logo: null,
    initials: "WS",
  },
];

function Experience() {
  // Animation state for fade/slide in
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="experience">
      <Typography variant="h5" component="h2" fontWeight={700} color="primary" gutterBottom>
        Experience
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
        {/* Timeline vertical bar */}
        <Box sx={{
          width: 6,
          bgcolor: 'primary.main',
          borderRadius: 3,
          mr: 2,
          minHeight: 1,
        }} />
        <Stack spacing={2} sx={{ flex: 1 }}>
          {experiences.map((exp, idx) => (
            <Paper
              key={exp.title}
              elevation={3}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                bgcolor: 'grey.50',
                boxShadow: 3,
                transition: 'box-shadow 0.3s, transform 0.3s, background 0.3s, opacity 0.5s, translate 0.5s',
                cursor: 'pointer',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(40px)',
                animation: mounted ? `fadeInSlideUp 0.6s ${0.1 + idx * 0.15}s both` : 'none',
                '&:hover': {
                  boxShadow: 8,
                  transform: 'scale(1.03)',
                  bgcolor: 'grey.100',
                },
              }}
            >
              <Avatar src={exp.logo} sx={{ bgcolor: 'primary.main', color: '#fff', width: 40, height: 40, fontWeight: 700, fontSize: 18 }}>
                {exp.initials}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight={700}>
                  {exp.title}
                </Typography>
                <Typography variant="body2" color="secondary" fontWeight={600}>
                  <BusinessIcon fontSize="inherit" sx={{ mr: 0.5, verticalAlign: 'middle' }} />
                  <Link href={exp.companyUrl} target="_blank" rel="noopener" underline="hover" color="primary">
                    {exp.company}
                  </Link> ({exp.years})
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {exp.desc}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>
      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Experience;

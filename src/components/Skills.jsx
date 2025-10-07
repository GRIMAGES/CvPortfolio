import { FaReact, FaNodeJs, FaGitAlt, FaPhp } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";

const skills = [
  { name: "React", icon: <FaReact size={26} style={{ color: '#06b6d4' }} />, desc: "React.js UI library" },
  { name: "JavaScript", icon: <SiJavascript size={26} style={{ color: '#facc15' }} />, desc: "JavaScript language" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={26} style={{ color: '#38bdf8' }} />, desc: "Utility-first CSS" },
  { name: "Node.js", icon: <FaNodeJs size={26} style={{ color: '#22c55e' }} />, desc: "Backend JS runtime" },
  { name: "Git", icon: <FaGitAlt size={26} style={{ color: '#f97316' }} />, desc: "Version control" },
  { name: "PHP", icon: <FaPhp size={26} style={{ color: '#6366f1' }} />, desc: "Server-side scripting" },
  { name: "SQL", icon: <SiMysql size={26} style={{ color: '#3b82f6' }} />, desc: "Database language" },
];

function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills">
      <Typography variant="h5" component="h2" fontWeight={700} color="primary" gutterBottom>
        Skills
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack direction="row" spacing={2.5} sx={{ flexWrap: 'wrap', rowGap: 2.5 }}>
        {skills.map((skill, idx) => (
          <Tooltip key={skill.name} title={skill.desc} arrow>
            <Paper
              elevation={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                minWidth: 150,
                borderRadius: 9999,
                boxShadow: 4,
                bgcolor: 'grey.50',
                border: '2px solid',
                borderColor: 'primary.light',
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: 0.2,
                cursor: 'pointer',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(30px)',
                animation: mounted ? `fadeInSkill 0.5s ${0.1 + idx * 0.08}s both` : 'none',
                transition: 'box-shadow 0.25s, transform 0.25s, background 0.25s, border-color 0.25s',
                '&:hover': {
                  boxShadow: 10,
                  transform: 'scale(1.08)',
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                  borderColor: 'primary.main',
                },
                '&:active': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              {skill.icon}
              <span style={{ fontWeight: 700 }}>{skill.name}</span>
            </Paper>
          </Tooltip>
        ))}
      </Stack>
      <style>{`
        @keyframes fadeInSkill {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Skills;

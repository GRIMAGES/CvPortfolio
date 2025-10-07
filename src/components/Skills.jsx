import { FaReact, FaNodeJs, FaGitAlt, FaPhp } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={18} style={{ color: '#06b6d4' }} /> },
    { name: "JavaScript", icon: <SiJavascript size={18} style={{ color: '#facc15' }} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={18} style={{ color: '#38bdf8' }} /> },
    { name: "Node.js", icon: <FaNodeJs size={18} style={{ color: '#22c55e' }} /> },
    { name: "Git", icon: <FaGitAlt size={18} style={{ color: '#f97316' }} /> },
    { name: "PHP", icon: <FaPhp size={18} style={{ color: '#6366f1' }} /> },
    { name: "SQL", icon: <SiMysql size={18} style={{ color: '#3b82f6' }} /> },
  ];

  return (
    <section id="skills">
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {skills.map((skill, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 8px', borderRadius: 8, background: '#f3f4f6' }}>
            {skill.icon}
            <span style={{ fontSize: 13 }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

function Projects() {
  const projects = [
    { title: "Portfolio Website" },
    { title: "Smart Hub Platform" },
    { title: "Smart Irrigation" },
  ];

  return (
    <section id="projects">
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Projects</h2>
      <ul style={{ paddingLeft: 16, margin: 0 }}>
        {projects.map((p, idx) => (
          <li key={idx} style={{ fontSize: 15, marginBottom: 4 }}>{p.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;

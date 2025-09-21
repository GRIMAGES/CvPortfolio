function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "My personal portfolio built with React + Tailwind" },
    { title: "Smart Hub Platform", desc: "A unified platform for scholarships, volunteerism & alumni tracking" },
    { title: "Smart Irrigation", desc: "IoT project with Arduino for efficient farming" },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-gray-700 inline-block">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl backdrop-blur-md bg-gray-900/70 shadow-2xl border border-gray-800 
              hover:-translate-y-2 hover:shadow-cyan-500/30 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

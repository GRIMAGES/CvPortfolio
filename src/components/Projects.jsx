function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "My personal portfolio built with React + Tailwind" },
    { title: "Smart Hub Platform", desc: "A unified platform for scholarships, volunteerism & alumni tracking" },
    { title: "Smart Irrigation", desc: "IoT project with Arduino for efficient farming" },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center animate-slide-up">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition transform hover:scale-105 animate-zoom-in"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

function Projects() {
  const projects = [
    { 
      title: "Portfolio Website", 
      desc: "My personal portfolio built with React + Tailwind", 
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      link: "#" 
    },
    { 
      title: "Smart Hub Platform", 
      desc: "A unified platform for scholarships, volunteerism & alumni tracking", 
      img: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
      link: "#" 
    },
    { 
      title: "Smart Irrigation", 
      desc: "IoT project with Arduino for efficient farming", 
      img: "https://img.daisyui.com/images/stock/photo-1521747116042-5a810fda9664.webp",
      link: "#" 
    },
  ];

  return (
    <section id="projects" className="min-h-screen text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-gray-700 inline-block">
          Projects
        </h2>

        {/* Horizontal scrollable cards */}
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {projects.map((p, idx) => (
            <div key={idx} className="flex-shrink-0">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{p.title}</h2>
                  <p>{p.desc}</p>
                  <div className="card-actions justify-end">
                    <a href={p.link} className="btn btn-primary">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;

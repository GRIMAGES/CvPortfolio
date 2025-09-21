import useInView from "./hooks/useInView";

function Skills() {
  const [ref, isVisible] = useInView();
  const skills = ["React", "JavaScript", "Tailwind CSS", "Node.js", "Git", "PHP", "SQL"];

  return (
    <section
      id="skills"
      ref={ref}
      className={`min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition transform hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

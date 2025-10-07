import useInView from "./hooks/useInView";
import { FaReact, FaNodeJs, FaGitAlt, FaPhp } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";
import TravelAdvisor from "./TravelAdvisor";

function Skills() {
  const [ref, isVisible] = useInView();

  const skills = [
    { name: "React", icon: <FaReact size={30} className="text-cyan-400" />, level: 85 },
    { name: "JavaScript", icon: <SiJavascript size={30} className="text-yellow-400" />, level: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} className="text-sky-400" />, level: 80 },
    { name: "Node.js", icon: <FaNodeJs size={30} className="text-green-500" />, level: 75 },
    { name: "Git", icon: <FaGitAlt size={30} className="text-orange-500" />, level: 85 },
    { name: "PHP", icon: <FaPhp size={30} className="text-indigo-400" />, level: 70 },
    { name: "SQL", icon: <SiMysql size={30} className="text-blue-500" />, level: 65 },
  ];

  return (
    <section id="skills" className="min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* ========================= LEFT SIDE — SKILLS ========================= */}
        <div ref={ref}>
          <h2 className="text-4xl font-bold mb-10 border-b-4 border-gray-700 inline-block">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl backdrop-blur-md bg-gray-900/70 shadow-2xl border border-gray-800
                  hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  transition: "all 0.8s ease-out",
                  transitionDelay: `${idx * 0.15}s`,
                }}
              >
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-gray-400 to-white"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transition: "width 1.2s ease-in-out",
                    }}
                  ></div>
                </div>

                {/* Percentage */}
                <p className="mt-2 text-sm text-gray-400">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================= RIGHT SIDE — TRAVEL ADVISOR PROJECT ========================= */}
        <div className="w-full">
          <TravelAdvisor />
        </div>
      </div>
    </section>
  );
}

export default Skills;

import useInView from "./hooks/useInView";

function About() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 px-6"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left side - About Me */}
        <div>
          <h2 className="text-4xl font-bold mb-6 border-b-4 border-gray-600 inline-block">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Hi, I’m <span className="font-semibold">William</span>, a passionate Web Developer 
            who enjoys building modern, sleek, and user-friendly websites. 
            I specialize in front-end development but also explore back-end 
            technologies. My goal is to create meaningful digital experiences 
            that combine functionality with great design.
          </p>
        </div>

        {/* Right side - School History */}
        <div>
          <h2 className="text-4xl font-bold mb-6 border-b-4 border-gray-600 inline-block">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">BS in Information Technology</h3>
              <p className="text-gray-400">2021 – Present</p>
              <p className="text-gray-300">[Your University Name]</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Senior High School</h3>
              <p className="text-gray-400">2019 – 2021</p>
              <p className="text-gray-300">[Your Senior High School Name]</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Junior High School</h3>
              <p className="text-gray-400">2015 – 2019</p>
              <p className="text-gray-300">[Your High School Name]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

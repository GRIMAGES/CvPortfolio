import useInView from "./hooks/useInView";

function About() {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className="min-h-screen text-white py-20 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left side - About Me */}
        <div className="p-8 rounded-2xl backdrop-blur-md bg-gray-900/70 shadow-2xl border border-gray-800 hover:-translate-y-2 hover:shadow-cyan-500/30 transition-all">
          <h2 className="text-4xl font-bold mb-6 border-b-4 border-gray-700 inline-block">
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

        {/* Right side - Education Timeline */}
        <div className="p-6 rounded-2xl backdrop-blur-md bg-gray-900/70 shadow-2xl border border-gray-800 hover:-translate-y-2 hover:shadow-cyan-500/30 transition-all">
          <h2 className="text-4xl font-bold mb-6 border-b-4 border-gray-700 inline-block">
            Education
          </h2>

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                ✅
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2021 – 2025</time>
                <div className="text-lg font-black">BS in Information Technology</div>
                <p className="text-gray-300">University of Makati</p>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle">🎓</div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic">2019 – 2021</time>
                <div className="text-lg font-black">Senior High School</div>
                <p className="text-gray-300">Higher School ng Umak</p>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle">🏫</div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2015 – 2019</time>
                <div className="text-lg font-black">Junior High School</div>
                <p className="text-gray-300">Pitogo High School</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

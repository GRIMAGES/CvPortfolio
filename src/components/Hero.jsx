import profileImg from "./image/profile1.jpg"; // adjust path if needed

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center text-white relative overflow-hidden"
    >
      {/* Background subtle effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side (Text) */}
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
            Hi, I’m <span className="text-gray-400">William</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 animate-slide-up">
            Web Developer & Designer
          </h2>
          <p className="text-gray-400 max-w-md mb-8 animate-slide-up">
            I create sleek, modern, and functional websites with clean designs
            and smooth user experiences.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gray-800 text-white border border-gray-600 font-semibold shadow-lg hover:bg-gray-700 transition transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side (Image with floating glow) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <img
              src={profileImg}
              alt="William"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

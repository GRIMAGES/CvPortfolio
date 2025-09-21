function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        
        {/* Left Side: Branding & Links */}
        <div className="text-center md:text-left">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">William</span> — All Rights Reserved.
          </p>
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a href="https://github.com" className="hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-white transition">LinkedIn</a>
            <a href="mailto:youremail@example.com" className="hover:text-white transition">Email</a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Me</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Send
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

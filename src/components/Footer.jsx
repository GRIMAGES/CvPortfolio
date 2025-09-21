function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Floating Card Wrapper */}
        <div className="p-8 rounded-2xl backdrop-blur-md bg-gray-900/70 shadow-2xl border border-gray-800 
          hover:shadow-cyan-500/30 transition-all duration-500">
          
          {/* Copyright */}
          <p className="mb-4">© {new Date().getFullYear()} <span className="text-white font-semibold">William</span> — All Rights Reserved.</p>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <a href="https://github.com" className="hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-white transition">LinkedIn</a>
            <a href="mailto:youremail@example.com" className="hover:text-white transition">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

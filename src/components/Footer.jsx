function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-10 text-center border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} <span className="text-white font-semibold">William</span> — All Rights Reserved.</p>
        <div className="flex justify-center gap-8 mt-4">
          <a href="https://github.com" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-white transition">LinkedIn</a>
          <a href="mailto:youremail@example.com" className="hover:text-white transition">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

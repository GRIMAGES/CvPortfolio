function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center border-t border-gray-800">
      <p>© {new Date().getFullYear()} William — All Rights Reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com" className="hover:text-white transition">GitHub</a>
        <a href="https://linkedin.com" className="hover:text-white transition">LinkedIn</a>
        <a href="mailto:youremail@example.com" className="hover:text-white transition">Email</a>
      </div>
    </footer>
  );
}

export default Footer;

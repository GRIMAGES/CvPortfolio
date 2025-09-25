import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [popup, setPopup] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopup("loading");

    try {
     const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      setPopup(data.success ? "success" : "error");
      if (data.success) setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setPopup("error");
    }

    setTimeout(() => setPopup(""), 4000); // auto-hide after 4s
  };

  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-14 border-t border-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        
        {/* Left - Socials */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-white mb-6">Connect with me</h3>
          <div className="flex space-x-5 text-2xl">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-white transition">
              <FaEnvelope />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Contact Me</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none transition"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none transition"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none transition resize-none h-28"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition transform hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Centered Popup Modal */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`px-8 py-6 rounded-2xl shadow-2xl text-center max-w-sm w-full transform transition-all duration-500
              ${popup === "loading" ? "bg-gray-900 text-gray-300 animate-pulse scale-95" : ""}
              ${popup === "success" ? "bg-green-600 text-white scale-105" : ""}
              ${popup === "error" ? "bg-red-600 text-white scale-105" : ""}
            `}
          >
            {popup === "loading" && (
              <p className="text-lg">⏳ Sending your message...</p>
            )}
            {popup === "success" && (
              <div>
                <p className="text-2xl mb-2">✅ Thank you!</p>
                <p className="text-sm">Your message has been sent successfully. I'll get back to you soon. 🙌</p>
              </div>
            )}
            {popup === "error" && (
              <div>
                <p className="text-2xl mb-2">❌ Oops!</p>
                <p className="text-sm">Something went wrong. Please try again later.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 mt-12 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">William</span> — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

import { useState } from "react";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [popup, setPopup] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopup("loading");

    try {
      const res = await fetch("/.netlify/functions/sendMessage", {
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

    setTimeout(() => setPopup(""), 4000); // auto-hide
  };

  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-14 border-t border-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        
        {/* Left - Socials */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-white mb-6">Connect with me</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://github.com" className="hover:text-white transition">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="hover:text-white transition">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:youremail@example.com" className="hover:text-white transition">
                Email
              </a>
            </li>
          </ul>
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

      {/* Popup Notification */}
      {popup && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl transition-all duration-500 ease-out transform
            ${popup === "loading" ? "bg-gray-800 text-gray-300 animate-pulse translate-y-0 opacity-100" : ""}
            ${popup === "success" ? "bg-green-600 text-white scale-105 translate-y-0 opacity-100" : ""}
            ${popup === "error" ? "bg-red-600 text-white scale-105 translate-y-0 opacity-100" : ""}
          `}
        >
          {popup === "loading" && "⏳ Sending..."}
          {popup === "success" && "✅ Message Sent Successfully!"}
          {popup === "error" && "❌ Failed to Send Message"}
        </div>
      )}

      <div className="text-center text-gray-600 mt-12 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">William</span> — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

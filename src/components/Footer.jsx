import { useState } from "react";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setShowPopup(true);

    try {
      const res = await fetch("/.netlify/functions/sendMessage", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    // Auto hide popup after 3s
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-10 text-center border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">William</span> — All Rights Reserved.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-900 border border-gray-700 text-white"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-900 border border-gray-700 text-white"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded bg-gray-900 border border-gray-700 text-white"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-lg text-white transform transition-all duration-500 
          ${status === "loading" ? "bg-gray-700 animate-pulse" : ""}
          ${status === "success" ? "bg-green-600" : ""}
          ${status === "error" ? "bg-red-600" : ""}
          ${showPopup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        >
          {status === "loading" && "⏳ Sending..."}
          {status === "success" && "✅ Message Sent!"}
          {status === "error" && "❌ Failed to Send"}
        </div>
      )}
    </footer>
  );
}

export default Footer;

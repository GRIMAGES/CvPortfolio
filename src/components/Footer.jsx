import { useState } from "react";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/.netlify/functions/sendMessage", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.success ? "✅ Message sent!" : "❌ Failed to send");
  };

  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-10 text-center border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">William</span> — All Rights Reserved.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 border border-gray-700"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 border border-gray-700"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded bg-gray-800 border border-gray-700"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit" className="px-6 py-3 bg-white text-black font-semibold rounded">
            Send
          </button>
        </form>

        {status && <p className="mt-4">{status}</p>}
      </div>
    </footer>
  );
}

export default Footer;

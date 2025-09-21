import { useState } from "react";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null); // { type: "success" | "error", message: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setPopup({ type: "success", message: "Your message has been sent 🎉" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setPopup({ type: "error", message: "Oops! Something went wrong ❌" });
      }
    } catch (error) {
      setPopup({ type: "error", message: "Server error. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-10 text-center border-t border-gray-800 relative">
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
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Popup Confirmation */}
        {popup && (
          <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
            onClick={() => setPopup(null)}
          >
            <div
              className={`p-6 rounded-2xl shadow-lg text-lg font-medium ${
                popup.type === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {popup.message}
              <button
                onClick={() => setPopup(null)}
                className="ml-4 px-3 py-1 bg-white text-black rounded-lg"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;

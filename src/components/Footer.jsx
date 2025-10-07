import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // '', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ width: "100%" }}>
      <Typography variant="h6" component="h3" fontWeight={700} gutterBottom>
        Contact Me
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} alignItems="stretch">
          <TextField
            size="small"
            label="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            fullWidth
          />
          <TextField
            size="small"
            type="email"
            label="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            fullWidth
          />
          <TextField
            size="small"
            label="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            fullWidth
            multiline
            minRows={1}
          />
          <Button type="submit" variant="contained" color="primary" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send"}
          </Button>
        </Stack>
      </Box>
      {status === "success" && (
        <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
          Your message has been sent successfully.
        </Typography>
      )}
      {status === "error" && (
        <Typography variant="body2" color="error.main" sx={{ mt: 1 }}>
          Something went wrong. Please try again later.
        </Typography>
      )}
    </section>
  );
}

export default Footer;

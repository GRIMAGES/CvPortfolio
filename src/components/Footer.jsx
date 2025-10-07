import { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // '', 'loading', 'success', 'error'

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const nameError = form.name.trim().length > 0 && form.name.trim().length < 2;
  const emailError = form.email.trim().length > 0 && !emailRegex.test(form.email.trim());
  const messageError = form.message.trim().length > 0 && form.message.trim().length < 10;
  const messageMax = 500;
  const messageLength = form.message.length;

  const isValid =
    form.name.trim().length >= 2 &&
    emailRegex.test(form.email.trim()) &&
    form.message.trim().length >= 10 &&
    form.message.length <= messageMax;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
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
      <Box sx={{ borderRadius: 0, border: '1px solid', borderColor: 'divider', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography variant="h6" component="h3" fontWeight={700} color="primary">
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
              error={nameError}
              helperText={nameError ? "Name must be at least 2 characters" : " "}
              sx={{ flex: { md: 1 } }}
            />
            <TextField
              size="small"
              type="email"
              label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              fullWidth
              error={emailError}
              helperText={emailError ? "Enter a valid email address" : " "}
              sx={{ flex: { md: 1 } }}
            />
            <TextField
              size="small"
              label={`Message (${messageLength}/${messageMax})`}
              value={form.message}
              onChange={(e) => {
                const v = e.target.value;
                if (v.length <= messageMax) setForm({ ...form, message: v });
              }}
              required
              fullWidth
              multiline
              minRows={6}
              maxRows={12}
              error={messageError}
              helperText={messageError ? "Message must be at least 10 characters" : " "}
              sx={{ flex: { md: 2 }, textarea: { resize: 'vertical' } }}
            />
            <Button type="submit" variant="contained" color="primary" disabled={status === "loading" || !isValid}>
              {status === "loading" ? "Sending..." : "Send"}
            </Button>
          </Stack>
        </Box>
        {status === "success" && (
          <Typography variant="body2" color="success.main">Your message has been sent successfully.</Typography>
        )}
        {status === "error" && (
          <Typography variant="body2" color="error.main">Something went wrong. Please try again later.</Typography>
        )}
      </Box>
    </section>
  );
}

export default Footer;

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ width: '100%', textAlign: 'center', fontSize: 13, color: '#888', padding: 0, margin: 0 }}>
      © {new Date().getFullYear()} <span style={{ color: '#1976d2', fontWeight: 600 }}>William</span> — All Rights Reserved.
    </footer>
  );
}

export default Footer;

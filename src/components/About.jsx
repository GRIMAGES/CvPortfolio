import useInView from "./hooks/useInView";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export function About() {
  return (
    <section id="about">
      <Typography variant="h5" component="h2" fontWeight={700} color="primary" gutterBottom>
        About Me
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1">
        Hi, I’m <b>William</b>, a passionate Web Developer who enjoys building modern, sleek, and user-friendly websites. I specialize in front-end development but also explore back-end technologies. My goal is to create meaningful digital experiences that combine functionality with great design.
      </Typography>
    </section>
  );
}

export function Education() {
  return (
    <section id="education">
      <Typography variant="h5" component="h2" fontWeight={700} color="primary" gutterBottom>
        Education
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <ul>
        <li>
          <div>✅</div>
          <div>
            <time>2021 – 2025</time>
            <div>BS in Information Technology</div>
            <p>University of Makati</p>
          </div>
        </li>
        <li>
          <div>🎓</div>
          <div>
            <time>2019 – 2021</time>
            <div>Senior High School</div>
            <p>Higher School ng Umak</p>
          </div>
        </li>
        <li>
          <div>🏫</div>
          <div>
            <time>2015 – 2019</time>
            <div>Junior High School</div>
            <p>Pitogo High School</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

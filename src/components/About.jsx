import useInView from "./hooks/useInView";

export function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hi, I’m <b>William</b>, a passionate Web Developer who enjoys building modern, sleek, and user-friendly websites. I specialize in front-end development but also explore back-end technologies. My goal is to create meaningful digital experiences that combine functionality with great design.
      </p>
    </section>
  );
}

export function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
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

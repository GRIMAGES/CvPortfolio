import profileImg from "./image/profile1.jpg";

function Hero() {
  return (
    <section id="hero" style={{ minHeight: 0, padding: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'flex-start' }}>
        <img
          src={profileImg}
          alt="William"
          style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid #333', marginRight: 16 }}
        />
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>William Duncan Gonzales</h1>
          <h2 style={{ fontSize: 16, fontWeight: 500, color: '#888', margin: 0 }}>Web Developer & Designer</h2>
          <p style={{ fontSize: 13, color: '#666', margin: 0, marginTop: 4 }}>
            I create sleek, modern, and functional websites with clean designs and smooth user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

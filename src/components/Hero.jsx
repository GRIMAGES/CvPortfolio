import profileImg from "./image/profile1.jpg";

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: 0,
      padding: 0,
      background: 'linear-gradient(90deg, #e3f2fd 0%, #f5f5f5 100%)',
      borderRadius: 16,
      boxShadow: '0 2px 12px 0 rgba(33,150,243,0.08)',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      justifyContent: 'flex-start',
      maxWidth: 340,
      margin: '0 auto',
      marginTop: 8,
      marginBottom: 8,
      border: '1px solid #e3e3e3',
    }}>
      <img
        src={profileImg}
        alt="William"
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #1976d2',
          boxShadow: '0 2px 8px 0 rgba(33,150,243,0.10)',
          marginLeft: 16,
        }}
      />
      <div style={{ padding: '8px 0', flex: 1 }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#1976d2', letterSpacing: 0.5 }}>William Duncan Gonzales</h1>
        <h2 style={{ fontSize: 13, fontWeight: 500, color: '#333', margin: 0, marginTop: 2 }}>Web Developer & Designer</h2>
        <p style={{ fontSize: 11, color: '#555', margin: 0, marginTop: 4, lineHeight: 1.4 }}>
          I create sleek, modern, and functional websites with clean designs and smooth user experiences.
        </p>
      </div>
    </section>
  );
}

export default Hero;

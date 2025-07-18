import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Baby, 
  BookOpen, 
  Users, 
  Target, 
  ClipboardList, 
  Book, 
  RotateCcw, 
  Laptop, 
  School, 
  HandHeart 
} from 'lucide-react';

const Programs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredMode, setHoveredMode] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    logo: {
      width: '40px',
      height: '40px',
      backgroundColor: '#4D7A94',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%'
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%,rgb(85, 196, 230) 50%,rgb(67, 190, 228) 75%, #4facfe 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 15s ease infinite',
    position: 'relative',
    overflow: 'hidden'
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(1px)'
  };

  const floatingShapesStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px 10px',
    color: 'white'
  };

  const heroStyle = {
    textAlign: 'center',
    marginBottom: '100px',
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const mainTitleStyle = {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 50%, #c7d2fe 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '24px',
    letterSpacing: '-0.05em',
    lineHeight: '1.1',
    textShadow: '0 10px 30px rgba(0,0,0,0.3)'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '40px',
    fontWeight: '300',
    letterSpacing: '0.02em'
  };

  const sectionStyle = {
    marginBottom: '120px',
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '800',
    color: 'white',
    marginBottom: '60px',
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block',
    width: '100%'
  };

  const programGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  };

  const programCardStyle = (index) => ({
    position: 'relative',
    background: hoveredCard === index 
      ? 'rgba(255, 255, 255, 0.25)' 
      : 'rgba(255, 255, 255, 0.15)',
    borderRadius: '24px',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
    boxShadow: hoveredCard === index 
      ? '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.3)'
      : '0 15px 35px rgba(0, 0, 0, 0.2)',
    transform: hoveredCard === index 
      ? 'translateY(-12px) scale(1.03)' 
      : 'translateY(0) scale(1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    overflow: 'hidden'
  });

  const programCardGlowStyle = (index) => ({
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: hoveredCard === index 
      ? 'linear-gradient(135deg, #667eea, #764ba2, #f093fb,rgb(48, 192, 228))'
      : 'transparent',
    borderRadius: '26px',
    opacity: hoveredCard === index ? 1 : 0,
    transition: 'opacity 0.4s ease',
    zIndex: -1
  });

  const programIconStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white'
  };

  const programTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '12px',
    lineHeight: '1.3'
  };

  const programDurationStyle = {
    display: 'inline-block',
    padding: '8px 16px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50px',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)'
  };

  const serviceGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '30px'
  };

  const serviceCardStyle = (index) => ({
    position: 'relative',
    background: hoveredCard === `service-${index}` 
      ? 'rgba(255, 255, 255, 0.25)' 
      : 'rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    padding: '35px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
    boxShadow: hoveredCard === `service-${index}` 
      ? '0 20px 40px rgba(0, 0, 0, 0.3)'
      : '0 10px 25px rgba(0, 0, 0, 0.15)',
    transform: hoveredCard === `service-${index}` 
      ? 'translateY(-8px)' 
      : 'translateY(0)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    overflow: 'hidden'
  });

  const serviceHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px'
  };

  const serviceIconStyle = {
    color: 'white',
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
  };

  const serviceTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: 'white'
  };

  const serviceDescStyle = {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6'
  };

  const modesContainerStyle = {
    marginTop: '80px',
    padding: '50px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '30px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
  };

  const modeGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginTop: '40px'
  };

  const modeCardStyle = (index) => ({
    padding: '35px',
    background: hoveredMode === index 
      ? 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%)'
      : 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    border: '2px solid',
    borderColor: hoveredMode === index 
      ? 'rgba(255, 255, 255, 0.4)' 
      : 'rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    cursor: 'pointer',
    transform: hoveredMode === index 
      ? 'scale(1.05) translateY(-5px)' 
      : 'scale(1) translateY(0)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: hoveredMode === index 
      ? '0 15px 30px rgba(0, 0, 0, 0.3)'
      : '0 8px 20px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(15px)'
  });

  const modeTextStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'white'
  };

  const programs = [
    { title: 'Diploma in Primary Education', duration: '2 years', icon: GraduationCap },
    { title: 'Certificate in Early Childhood Development', duration: '1 year', icon: Baby },
    { title: 'Diploma in Secondary Education', duration: '2 years', icon: BookOpen },
    { title: 'Diploma in Special Needs Education', duration: '2 years', icon: Users },
    { title: 'Post-Graduate Diploma in Education', duration: '1 year', icon: Target }
  ];

  const shortCourses = [
    'Institutional Leadership and Management',
    'Institutional Finance Management for school Bursars'
  ];

  const services = [
    {
      title: 'Diploma in Education',
      description: 'Pre-primary and primary teacher training with comprehensive 2-year program designed to build foundational teaching skills',
      icon: Book
    },
    {
      title: 'Continuous Professional Development',
      description: 'Advanced short courses in classroom management, curriculum design, and modern ICT integration techniques',
      icon: RotateCcw
    },
    {
      title: 'ICT Lab & Library',
      description: 'State-of-the-art access to educational technology and extensive teaching resources for modern educators',
      icon: Laptop
    },
    {
      title: 'Field Practicum',
      description: 'Hands-on supervised teaching placements in partner schools with mentorship and practical experience',
      icon: School
    },
    {
      title: 'Consultancy & Workshops',
      description: 'Professional training for in-service teachers through strategic partnerships with schools and NGOs',
      icon: HandHeart
    }
  ];

  const modes = ['Online Learning', 'Blended Learning', 'Physical Classes'];

  const FloatingShape = ({ size, color, duration, delay }) => (
    <div
      style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        borderRadius: '50%',
        opacity: 0.1,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }}
    />
  );

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div style={containerStyle}>
        <div style={backgroundOverlayStyle} />
        
        <div style={floatingShapesStyle}>
          <FloatingShape size={60} color="rgba(255,255,255,0.1)" duration={8} delay={0} />
          <FloatingShape size={40} color="rgba(255,255,255,0.05)" duration={12} delay={2} />
          <FloatingShape size={80} color="rgba(255,255,255,0.08)" duration={10} delay={4} />
          <FloatingShape size={30} color="rgba(255,255,255,0.03)" duration={15} delay={6} />
        </div>
        
        <div style={contentStyle}>
          <div style={heroStyle}>
            <h1 style={mainTitleStyle}>Our Programs</h1>
            <p style={subtitleStyle}>
              Empowering the next generation of educators with world-class training and cutting-edge methodologies
            </p>
          </div>
          
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Featured Programs</h2>
            <div style={programGridStyle}>
              {programs.map((program, index) => (
                <div
                  key={index}
                  style={programCardStyle(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={programCardGlowStyle(index)} />
                  <div style={programIconStyle}>
                    <program.icon size={24} />
                  </div>
                  <div style={programTitleStyle}>
                    {program.title}
                  </div>
                  <div style={programDurationStyle}>
                    {program.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Short Courses</h2>
            <div style={programGridStyle}>
              {shortCourses.map((course, index) => (
                <div
                  key={index}
                  style={programCardStyle(`short-${index}`)}
                  onMouseEnter={() => setHoveredCard(`short-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={programCardGlowStyle(`short-${index}`)} />
                  <div style={programIconStyle}>
                    <ClipboardList size={24} />
                  </div>
                  <div style={programTitleStyle}>
                    {course}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Services & Facilities</h2>
            <div style={serviceGridStyle}>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    style={serviceCardStyle(index)}
                    onMouseEnter={() => setHoveredCard(`service-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div style={serviceHeaderStyle}>
                      <div style={serviceIconStyle}>
                        <IconComponent size={32} />
                      </div>
                      <div style={serviceTitleStyle}>{service.title}</div>
                    </div>
                    <div style={serviceDescStyle}>{service.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div style={modesContainerStyle}>
            <h2 style={sectionTitleStyle}>Modes of Study</h2>
            <div style={modeGridStyle}>
              {modes.map((mode, index) => (
                <div
                  key={index}
                  style={modeCardStyle(index)}
                  onMouseEnter={() => setHoveredMode(index)}
                  onMouseLeave={() => setHoveredMode(null)}
                >
                  <div style={modeTextStyle}>{mode}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer style={{ background: '#111827', color: 'white', padding: '48px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={styles.logo}>
                  <GraduationCap style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>WTTC</span>
              </div>
              <p style={{ color: '#9ca3af', lineHeight: '1.6', margin: 0 }}>
                Empowering Somalia's educational future through excellence in teacher training.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ color: '#9ca3af', margin: 0 }}>Mogadishu, Banadir, Somalia</p>
                <p style={{ color: '#9ca3af', margin: 0 }}>info@wttc.edu.so</p>
                <p style={{ color: '#9ca3af', margin: 0 }}>+252 612 971520</p>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Programs', 'Admissions', 'About Us', 'Contact'].map((link, index) => (
                  <a key={index} href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none', 
                    transition: 'color 0.3s ease' 
                  }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid #374151', 
            marginTop: '32px', 
            paddingTop: '32px', 
            textAlign: 'center' 
          }}>
            <p style={{ color: '#9ca3af', margin: 0 }}>
              &copy; 2025 Wadani Teachers Training College. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Programs;
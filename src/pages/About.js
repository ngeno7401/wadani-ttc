import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Eye, Users, Target, Shield, BookOpen, Monitor, Building2, MapPin, Sparkles, Star, ArrowRight, Award, Globe, Heart, Zap } from 'lucide-react';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 6);
    }, 4000);

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    background: `
      linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%),
      radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.1) 0%, transparent 70%)
    `,
    position: 'relative',
    overflow: 'hidden'
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  const backgroundPattern = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%),
      linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.02) 50%, transparent 51%)
    `,
    animation: 'float 8s ease-in-out infinite',
    transform: `translateY(${scrollY * 0.5}px)`
  };

  const contentWrapper = {
    position: 'relative',
    zIndex: 1,
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
    transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  };

  const titleStyle = {
    fontSize: '5rem',
    fontWeight: '900',
    background: 'linear-gradient(45deg, #ffffff, #f8f9ff, #e0e7ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem',
    textShadow: '0 4px 8px rgba(0,0,0,0.2)',
    position: 'relative',
    display: 'inline-block'
  };

  const titleGlow = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '110%',
    height: '110%',
    background: 'radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, transparent 70%)',
    animation: 'glow 2s ease-in-out infinite alternate',
    zIndex: -1
  };

  const subtitleStyle = {
    fontSize: '1.8rem',
    color: 'rgba(255,255,255,0.95)',
    fontWeight: '300',
    letterSpacing: '1px',
    marginBottom: '2rem',
    animation: 'slideInUp 1s ease-out 0.5s both'
  };

  const statsContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  };

  const statItem = {
    textAlign: 'center',
    padding: '1.5rem',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '20px',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.2)',
    minWidth: '150px',
    animation: 'slideInUp 1s ease-out 0.8s both'
  };

  const statNumber = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#4facfe',
    display: 'block',
    marginBottom: '0.5rem'
  };

  const statLabel = {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500'
  };

   const sectionStyle = {
    marginBottom: '4rem',
    padding: '2rem 0',
    scrollMarginTop: '100px' // Account for navbar height
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const cardStyle = (index) => ({
    background: hoveredCard === index 
      ? 'rgba(255,255,255,0.15)' 
      : 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(25px)',
    border: hoveredCard === index 
      ? '2px solid rgba(79,172,254,0.5)' 
      : '1px solid rgba(255,255,255,0.2)',
    borderRadius: '25px',
    padding: '2.5rem',
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: `all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.15}s`,
    boxShadow: hoveredCard === index 
      ? '0 25px 50px rgba(0,0,0,0.25), 0 0 30px rgba(79,172,254,0.3)' 
      : '0 15px 35px rgba(0,0,0,0.1)',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  });

  const cardGlow = {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'conic-gradient(from 0deg, transparent, rgba(79,172,254,0.1), transparent, rgba(79,172,254,0.1), transparent)',
    animation: 'rotate 8s linear infinite',
    opacity: hoveredCard !== null ? 1 : 0,
    transition: 'opacity 0.5s ease'
  };

  const iconStyle = {
    width: '3.5rem',
    height: '3.5rem',
    color: '#4facfe',
    marginBottom: '1.5rem',
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
    animation: 'bounce 2s infinite'
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '1.5rem',
    position: 'relative',
    display: 'inline-block'
  };

  const titleUnderline = {
    position: 'absolute',
    bottom: '-5px',
    left: '0',
    width: '100%',
    height: '3px',
    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
    borderRadius: '2px',
    animation: 'slideInLeft 1s ease-out 0.5s both'
  };

  const textStyle = {
    color: 'rgba(255,255,255,0.95)',
    lineHeight: '1.7',
    fontSize: '1.1rem',
    fontWeight: '400'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const listItemStyle = {
    padding: '0.8rem 0',
    color: 'rgba(255,255,255,0.95)',
    position: 'relative',
    paddingLeft: '2rem',
    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    borderRadius: '10px',
    margin: '0.5rem 0'
  };

  const bulletStyle = {
    position: 'absolute',
    left: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '8px',
    height: '8px',
    background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
    borderRadius: '50%',
    boxShadow: '0 0 15px rgba(79,172,254,0.8)',
    animation: 'pulse 2s infinite'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1.5rem',
    borderRadius: '15px',
    overflow: 'hidden'
  };

  const thStyle = {
    background: 'rgba(79,172,254,0.2)',
    color: '#ffffff',
    padding: '1.5rem',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '1.1rem',
    position: 'relative'
  };

  const tdStyle = {
    padding: '1.5rem',
    color: 'rgba(255,255,255,0.95)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    transition: 'all 0.4s ease',
    position: 'relative'
  };

  const facilitiesData = [
    { icon: <BookOpen />, name: 'Modern Classrooms', color: '#4facfe' },
    { icon: <Monitor />, name: 'ICT Laboratory', color: '#00f2fe' },
    { icon: <Building2 />, name: 'Digital Library', color: '#667eea' },
    { icon: <Users />, name: 'Administrative Offices', color: '#764ba2' },
    { icon: <GraduationCap />, name: 'Student Innovation Center', color: '#f093fb' }
  ];

  const facilitiesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem'
  };

  const facilityCardStyle = (index) => ({
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '20px',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    border: '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer',
    animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`
  });

  const achievementBadges = [
    { icon: <Award />, text: 'Excellence in Education', color: '#ffd700' },
    { icon: <Globe />, text: 'International Recognition', color: '#4facfe' },
    { icon: <Heart />, text: 'Community Impact', color: '#ff6b6b' },
    { icon: <Zap />, text: 'Innovation Leader', color: '#00f2fe' }
  ];

  const badgeStyle = (index) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.8rem 1.5rem',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.9)',
    animation: `slideInLeft 0.8s ease-out ${index * 0.2}s both`,
    transition: 'all 0.3s ease'
  });

   // Mission and Vision card styles
  const missionVisionCardStyle = {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(25px)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '25px',
    padding: '3rem',
    marginBottom: '3rem',
    textAlign: 'center',
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    position: 'relative',
    overflow: 'hidden'
  };

  const missionVisionTitleStyle = {
    fontSize: '3rem',
    fontWeight: '800',
    background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  };

  const missionVisionTextStyle = {
    color: 'rgba(255,255,255,0.95)',
    lineHeight: '1.8',
    fontSize: '1.3rem',
    fontWeight: '300',
    maxWidth: '800px',
    margin: '0 auto'
  };

  return (
    <div style={containerStyle} ref={containerRef}>
      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          style={{
            position: 'absolute',
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: `float ${element.duration}s ease-in-out infinite ${element.delay}s`,
            pointerEvents: 'none'
          }}
        />
      ))}

      <div style={backgroundPattern}>
        <div style={cardGlow}></div>
      </div>
      
      <div style={contentWrapper}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>
            <div style={titleGlow}></div>
            WTTC
          </h1>
          <p style={subtitleStyle}>Transforming Education Through Innovation</p>
          
          {/* Achievement Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {achievementBadges.map((badge, index) => (
              <div key={index} style={badgeStyle(index)}>
                <div style={{ color: badge.color }}>{badge.icon}</div>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={statsContainer}>
            <div style={statItem}>
              <span style={statNumber}>500+</span>
              <span style={statLabel}>Students</span>
            </div>
            <div style={statItem}>
              <span style={statNumber}>25+</span>
              <span style={statLabel}>Expert Faculty</span>
            </div>
            <div style={statItem}>
              <span style={statNumber}>10+</span>
              <span style={statLabel}>Years Experience</span>
            </div>
            <div style={statItem}>
              <span style={statNumber}>95%</span>
              <span style={statLabel}>Success Rate</span>
            </div>
          </div>
        </header>

        {/* Mission Section */}
        <section id="mission" style={sectionStyle}>
          <div style={missionVisionCardStyle}>
            <h2 style={missionVisionTitleStyle}>
              <Target style={{ width: '3rem', height: '3rem' }} />
              Our Mission
            </h2>
            <p style={missionVisionTextStyle}>
              To provide high-quality, innovative teacher education that empowers educators with the knowledge, skills, and values necessary to transform Somalia's educational landscape. We are committed to developing competent, confident, and caring teachers who will inspire and nurture the next generation of leaders, thinkers, and problem-solvers in our communities.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" style={sectionStyle}>
          <div style={missionVisionCardStyle}>
            <h2 style={missionVisionTitleStyle}>
              <Eye style={{ width: '3rem', height: '3rem' }} />
              Our Vision
            </h2>
            <p style={missionVisionTextStyle}>
              To be the leading teacher training institution in Somalia and the Horn of Africa, recognized for excellence in educational innovation, research, and community engagement. We envision a future where every classroom in Somalia is led by a skilled, passionate educator who creates inclusive, engaging learning environments that prepare students for success in a rapidly changing world.
            </p>
          </div>
        </section>

        <div style={gridStyle}>
          <div 
            style={cardStyle(0)} 
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Sparkles style={{...iconStyle, position: 'absolute', top: '1.5rem', right: '1.5rem', width: '2rem', height: '2rem', color: '#ffd700'}} />
            <MapPin style={iconStyle} />
            <h2 style={sectionTitleStyle}>
              Campus & Facilities
              <div style={titleUnderline}></div>
            </h2>
            <p style={textStyle}>Located in the heart of Mogadishu, our state-of-the-art campus features modern facilities designed for excellence:</p>
            <div style={facilitiesGridStyle}>
              {facilitiesData.map((facility, index) => (
                <div 
                  key={index} 
                  style={facilityCardStyle(index)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <div style={{
                    ...iconStyle, 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    margin: '0 auto 1rem',
                    color: facility.color
                  }}>
                    {facility.icon}
                  </div>
                  <p style={{...textStyle, fontSize: '1rem', margin: 0, fontWeight: '500'}}>{facility.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div 
            style={cardStyle(1)} 
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Users style={iconStyle} />
            <h2 style={sectionTitleStyle}>
              Leadership Team
              <div style={titleUnderline}></div>
            </h2>
            <div style={textStyle}>
              <div style={{...listItemStyle, background: 'rgba(255,255,255,0.05)', borderRadius: '10px', margin: '0.5rem 0'}}>
                <span style={bulletStyle}></span>
                <strong>Director:</strong> Abdiaziz Abdullahi Ali
              </div>
              <div style={{...listItemStyle, background: 'rgba(255,255,255,0.05)', borderRadius: '10px', margin: '0.5rem 0'}}>
                <span style={bulletStyle}></span>
                <strong>Principal:</strong> Abass Abdullahi Maalim
              </div>
              <div style={{...listItemStyle, background: 'rgba(255,255,255,0.05)', borderRadius: '10px', margin: '0.5rem 0'}}>
                <span style={bulletStyle}></span>
                <strong>Deputy Principal:</strong> Salah Yussuf Abdinoor
              </div>
              <div style={{...listItemStyle, background: 'rgba(255,255,255,0.05)', borderRadius: '10px', margin: '0.5rem 0'}}>
                <span style={bulletStyle}></span>
                <strong>Registrar:</strong> Mohamed Jimale
              </div>
              <div style={{...listItemStyle, background: 'rgba(255,255,255,0.05)', borderRadius: '10px', margin: '0.5rem 0'}}>
                <span style={bulletStyle}></span>
                <strong>Finance Officer:</strong> Issa Khalif Hussein
              </div>
            </div>
          </div>

          <div 
            style={cardStyle(2)} 
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <GraduationCap style={iconStyle} />
            <h2 style={sectionTitleStyle}>
              Expert Faculty
              <div style={titleUnderline}></div>
            </h2>
            <p style={textStyle}>Our distinguished lecturers bring years of experience and innovation to education:</p>
            <ul style={listStyle}>
              {[
                'Abdikher Mohamed', 'Abdi Kunow Hassan', 'Abdimalik Yussuf Adow',
                'Ibrahim Hussein Ali', 'Ibrahim Jimali Ali', 'Hassan Daud Ali',
                'Yussuf Mohamed Idow', 'Mohamed Muhumed Yunis', 'Elmoge Hashim Mohamed',
                'Hassan Haji Kassim', 'Olad Abdullahi Mohamed'
              ].map((name, index) => (
                <li 
                  key={index} 
                  style={listItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(79,172,254,0.1)';
                    e.currentTarget.style.paddingLeft = '2.5rem';
                    e.currentTarget.style.color = '#4facfe';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.paddingLeft = '2rem';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.95)';
                  }}
                >
                  <span style={bulletStyle}></span>
                  {name}
                  <ArrowRight style={{
                    width: '1rem',
                    height: '1rem',
                    marginLeft: '0.5rem',
                    opacity: 0,
                    transition: 'all 0.3s ease'
                  }} />
                </li>
              ))}
            </ul>
          </div>

          <div 
            style={cardStyle(3)} 
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Target style={iconStyle} />
            <h2 style={sectionTitleStyle}>
              Marketing & Outreach
              <div style={titleUnderline}></div>
            </h2>
            <ul style={listStyle}>
              {[
                'Social Media Marketing & Digital Campaigns',
                'Community Outreach and Open Days',
                'Strategic Partnerships with NGOs & Education Ministries',
                'Multi-Channel Advertising (TV, Radio, Digital)',
                'Alumni Ambassador Programs'
              ].map((item, index) => (
                <li 
                  key={index} 
                  style={listItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(79,172,254,0.1)';
                    e.currentTarget.style.paddingLeft = '2.5rem';
                    e.currentTarget.style.color = '#4facfe';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.paddingLeft = '2rem';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.95)';
                  }}
                >
                  <span style={bulletStyle}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div 
            style={cardStyle(4)} 
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Sparkles style={iconStyle} />
            <h2 style={sectionTitleStyle}>
              Sustainability & Social Impact
              <div style={titleUnderline}></div>
            </h2>
            <div style={textStyle}>
              <p style={{...textStyle, fontWeight: '600', marginBottom: '1rem'}}>Financial Sustainability:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}><span style={bulletStyle}></span>Self-generated Revenue Growth</li>
                <li style={listItemStyle}><span style={bulletStyle}></span>Endowment Fund Development</li>
                <li style={listItemStyle}><span style={bulletStyle}></span>International Donor Partnerships</li>
              </ul>
              <p style={{...textStyle, fontWeight: '600', marginBottom: '1rem', marginTop: '2rem'}}>Social Responsibility:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}><span style={bulletStyle}></span>Scholarships for Marginalized Communities</li>
                <li style={listItemStyle}><span style={bulletStyle}></span>Community Literacy Programs</li>
                <li style={listItemStyle}><span style={bulletStyle}></span>Environmental Education Integration</li>
              </ul>
            </div>
          </div>

          <div 
            style={cardStyle(5)} 
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Shield style={iconStyle} />
            <h2 style={sectionTitleStyle}>
              Risk Management
              <div style={titleUnderline}></div>
            </h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Risk Factor</th>
                  <th style={thStyle}>Mitigation Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(79,172,254,0.1)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  style={{transition: 'all 0.3s ease'}}
                >
                  <td style={tdStyle}>Political Instability</td>
                  <td style={tdStyle}>Strategic location selection & security partnerships</td>
                </tr>
                <tr 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(79,172,254,0.1)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  style={{transition: 'all 0.3s ease'}}
                >
                  <td style={tdStyle}>Low Enrollment</td>
                  <td style={tdStyle}>Aggressive outreach & scholarship programs</td>
                </tr>
                <tr 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(79,172,254,0.1)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  style={{transition: 'all 0.3s ease'}}
                >
                  <td style={tdStyle}>Funding Shortfalls</td>
                  <td style={tdStyle}>Diversified income sources & grant applications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      

      {/* Footer */}
      <footer style={{ 
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)', 
        color: 'white', 
        padding: '48px 0',
        marginTop: '4rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, #4facfe, #00f2fe, #667eea, #764ba2)',
          animation: 'shimmer 3s ease-in-out infinite'
        }}></div>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  backgroundColor: '#1f2937',
                  padding: '12px',
                  borderRadius: '50%',
                  border: '2px solid #4facfe',
                  boxShadow: '0 0 20px rgba(79,172,254,0.3)'
                }}>
                  <GraduationCap style={{ width: '24px', height: '24px', color: '#4facfe' }} />
                </div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>WTTC</span>
              </div>
              <p style={{ color: '#9ca3af', lineHeight: '1.6', margin: 0 }}>
                Empowering Somalia's educational future through excellence in teacher training and innovative learning solutions.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#4facfe' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ color: '#9ca3af', margin: 0 }}>📍 Mogadishu, Somalia</p>
                <p style={{ color: '#9ca3af', margin: 0 }}>📧 info@wttc.edu.so</p>
                <p style={{ color: '#9ca3af', margin: 0 }}>📞 +252 727 228832</p>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#4facfe' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Programs', 'Admissions', 'About Us', 'Contact'].map((link, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    style={{ 
                      color: '#9ca3af', 
                      textDecoration: 'none', 
                      transition: 'all 0.3s ease',
                      padding: '0.5rem 0',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#4facfe';
                      e.currentTarget.style.paddingLeft = '1rem';
                      e.currentTarget.style.background = 'rgba(79,172,254,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af';
                      e.currentTarget.style.paddingLeft = '0';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <ArrowRight style={{ width: '1rem', height: '1rem', opacity: 0.7 }} />
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
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-1px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '2px',
              background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
              borderRadius: '1px'
            }}></div>
            <p style={{ color: '#9ca3af', margin: 0 }}>
              &copy; 2025 Wadani Teachers Training College. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
            box-shadow: 0 0 15px rgba(79,172,254,0.8);
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.2);
            box-shadow: 0 0 25px rgba(79,172,254,1);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slideInUp {
          0% { 
            opacity: 0; 
            transform: translateY(50px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-50px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .card-hover {
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .card-hover:hover {
          transform: translateY(-20px) scale(1.02) !important;
          box-shadow: 0 30px 60px rgba(0,0,0,0.3), 0 0 40px rgba(79,172,254,0.4) !important;
        }
        
        .facility-card-hover {
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .facility-card-hover:hover {
          background: rgba(255,255,255,0.2) !important;
          transform: translateY(-15px) scale(1.1) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
        }
        
        .list-item-hover {
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .list-item-hover:hover {
          background: rgba(79,172,254,0.15) !important;
          padding-left: 3rem !important;
          color: #4facfe !important;
          transform: translateX(10px) !important;
        }
        
        .table-row-hover {
          transition: all 0.3s ease;
        }
        
        .table-row-hover:hover {
          background: rgba(79,172,254,0.1) !important;
          transform: scale(1.02) !important;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important;
        }
        
        .badge-hover {
          transition: all 0.3s ease;
        }
        
        .badge-hover:hover {
          transform: translateY(-3px) scale(1.05) !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
          background: rgba(255,255,255,0.2) !important;
        }
        
        .stat-item-hover {
          transition: all 0.3s ease;
        }
        
        .stat-item-hover:hover {
          transform: translateY(-5px) scale(1.05) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2) !important;
          background: rgba(255,255,255,0.15) !important;
        }
        
        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #4facfe, #00f2fe);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #00f2fe, #4facfe);
        }
      `}</style>
      
    </div>
  );
};

export default About;
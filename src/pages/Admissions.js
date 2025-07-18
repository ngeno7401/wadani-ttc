import React, { useState } from 'react';
import { FileText, CheckCircle, Calendar, Users, GraduationCap, Clock, BookOpen, Award, ChevronRight } from 'lucide-react';

const Admission = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerStyle = {
    minHeight: '100vh',
    background: '#ffffff',
    padding: '0',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backdropFilter: 'blur(20px)',
    padding: '40px 0',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  };

  const mainTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '16px',
    textShadow: '0 4px 20px rgba(0,0,0,0.1)',
  };

  const subtitleStyle = {
    fontSize: '1.3rem',
    color: 'rgba(255,255,255,0.9)',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const sectionStyle = {
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '20px',
    padding: '40px',
    marginBottom: '30px',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  };

  const cardStyle = (isHovered) => ({
    background: isHovered ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
    borderRadius: '15px',
    padding: '25px',
    marginBottom: '20px',
    border: '1px solid rgba(102,126,234,0.1)',
    transition: 'all 0.4s ease',
    transform: isHovered ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: isHovered ? '0 15px 35px rgba(102,126,234,0.3)' : '0 5px 15px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    color: isHovered ? '#ffffff' : '#333',
  });

  const iconStyle = (isHovered) => ({
    width: '24px',
    height: '24px',
    marginRight: '12px',
    color: isHovered ? '#ffffff' : '#667eea',
  });

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const ctaButtonStyle = {
    background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)',
    color: 'white',
    border: 'none',
    padding: '18px 36px',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(255,107,107,0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '30px auto',
  };

  const eligibilityCriteria = [
    {
      icon: <GraduationCap />,
      title: "High School Graduates",
      description: "Passionate about teaching and making a difference in education"
    },
    {
      icon: <BookOpen />,
      title: "Current Teachers",
      description: "Seeking professional certification and career advancement"
    },
    {
      icon: <Users />,
      title: "Career Changers",
      description: "Graduates from other fields entering the education sector"
    },
    {
      icon: <Award />,
      title: "Institutional Staff",
      description: "NGOs or institutions seeking professional development for staff"
    }
  ];

  const requirements = [
    {
      icon: <FileText />,
      title: "National ID or Passport",
      description: "Valid identification document (copy required)"
    },
    {
      icon: <Award />,
      title: "Academic Transcripts",
      description: "Educational certificates and transcripts from previous institutions"
    },
    {
      icon: <Users />,
      title: "Passport Photos",
      description: "Two recent passport-size photographs"
    },
    {
      icon: <CheckCircle />,
      title: "Application Form",
      description: "Completed application form (available online or at campus)"
    },
    {
      icon: <Calendar />,
      title: "Interview",
      description: "Scheduled interview assessment (where applicable)"
    }
  ];

  const studyModes = [
    {
      icon: <BookOpen />,
      title: "Physical Classes",
      description: "Traditional classroom learning at our Mogadishu campus",
      badge: "Most Popular"
    },
    {
      icon: <Users />,
      title: "Blended Learning",
      description: "Combination of in-person and online learning experiences",
      badge: "Flexible"
    },
    {
      icon: <Clock />,
      title: "Online Learning",
      description: "Full online delivery for select short courses and programs",
      badge: "Convenient"
    }
  ];

  const intakes = [
    {
      title: "January Intake",
      deadline: "Application Deadline: December 15th",
      startDate: "Classes Begin: January 15th",
      status: "Open",
      highlight: true
    },
    {
      title: "August Intake",
      deadline: "Application Deadline: July 15th",
      startDate: "Classes Begin: August 15th",
      status: "Open",
      highlight: false
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={mainTitleStyle}>Admission</h1>
        <p style={subtitleStyle}>
          Join Wadani Teachers Training College and become part of Somalia's educational transformation. 
          Start your journey to becoming a certified educator today.
        </p>
      </div>

      <div style={contentStyle}>
        {/* Who Can Apply Section */}
        <div style={sectionStyle}>
          <h2 style={gradientTextStyle}>Who Can Apply?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {eligibilityCriteria.map((criteria, index) => (
              <div
                key={index}
                style={cardStyle(hoveredCard === `eligibility-${index}`)}
                onMouseEnter={() => setHoveredCard(`eligibility-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={iconStyle(hoveredCard === `eligibility-${index}`)}>
                    {criteria.icon}
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>{criteria.title}</h3>
                </div>
                <p style={{ margin: 0, lineHeight: '1.6' }}>{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Study Modes Section */}
        <div style={sectionStyle}>
          <h2 style={gradientTextStyle}>Study Modes Available</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {studyModes.map((mode, index) => (
              <div
                key={index}
                style={cardStyle(hoveredCard === `mode-${index}`)}
                onMouseEnter={() => setHoveredCard(`mode-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={iconStyle(hoveredCard === `mode-${index}`)}>
                      {mode.icon}
                    </div>
                    <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>{mode.title}</h3>
                  </div>
                  <span style={{ 
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: hoveredCard === `mode-${index}` ? 'rgba(255,255,255,0.2)' : 'rgba(102,126,234,0.1)',
                    color: hoveredCard === `mode-${index}` ? '#ffffff' : '#667eea'
                  }}>
                    {mode.badge}
                  </span>
                </div>
                <p style={{ margin: 0, lineHeight: '1.6' }}>{mode.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div style={sectionStyle}>
          <h2 style={gradientTextStyle}>Admission Requirements</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {requirements.map((req, index) => (
              <div
                key={index}
                style={cardStyle(hoveredCard === `req-${index}`)}
                onMouseEnter={() => setHoveredCard(`req-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={iconStyle(hoveredCard === `req-${index}`)}>
                    {req.icon}
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>{req.title}</h3>
                </div>
                <p style={{ margin: 0, lineHeight: '1.6' }}>{req.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Deadlines Section */}
        <div style={sectionStyle}>
          <h2 style={gradientTextStyle}>Application Deadlines & Intakes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
            {intakes.map((intake, index) => (
              <div
                key={index}
                style={{
                  ...cardStyle(hoveredCard === `intake-${index}`),
                  border: intake.highlight ? '2px solid #ff6b6b' : '1px solid rgba(102,126,234,0.1)',
                }}
                onMouseEnter={() => setHoveredCard(`intake-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Calendar style={iconStyle(hoveredCard === `intake-${index}`)} />
                    <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '600' }}>{intake.title}</h3>
                  </div>
                  <span style={{ 
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    background: hoveredCard === `intake-${index}` ? 'rgba(255,255,255,0.2)' : intake.highlight ? 'rgba(255,107,107,0.1)' : 'rgba(102,126,234,0.1)',
                    color: hoveredCard === `intake-${index}` ? '#ffffff' : intake.highlight ? '#ff6b6b' : '#667eea'
                  }}>
                    {intake.status}
                  </span>
                </div>
                <p style={{ margin: '0 0 8px 0', lineHeight: '1.6', fontWeight: '500' }}>{intake.deadline}</p>
                <p style={{ margin: 0, lineHeight: '1.6', opacity: 0.8 }}>{intake.startDate}</p>
              </div>
            ))}
          </div>
          <div style={{ 
            marginTop: '20px', 
            padding: '20px', 
            background: 'rgba(255,107,107,0.1)', 
            borderRadius: '10px',
            border: '1px solid rgba(255,107,107,0.2)'
          }}>
            <p style={{ margin: 0, color: '#ff6b6b', fontWeight: '600', textAlign: 'center' }}>
              💡 Pro Tip: Apply early to secure your spot and maximize scholarship opportunities!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 40px rgba(255,107,107,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(255,107,107,0.3)';
            }}
          >
            Start Your Application
            <ChevronRight style={{ width: '20px', height: '20px' }} />
          </button>
          <p style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '18px', 
            fontWeight: '500',
            marginTop: '20px'
          }}>
            Ready to begin your teaching journey? Apply online or visit our campus today.
          </p>
        </div>
      </div>
      
      {/* Footer - Now outside the container to occupy full page width */}
      <footer style={{ background: '#111827', color: 'white', padding: '48px 0', width: '100%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#2563EB', borderRadius: '8px' }}>
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
    </div>
  );
};

export default Admission;
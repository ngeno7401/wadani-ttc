import React, { useState, useEffect } from 'react';
import { GraduationCap, User, Building, Gem, BookOpen, Users, Heart, Award, Globe, Star, ChevronRight, MapPin, Target, Eye, Menu, X } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const heroSlides = [
    {
      title: "Empowering Somalia's Educational Future",
      subtitle: "Through qualified, competent, and ethical educators",
      image: "🎓"
    },
    {
      title: "Excellence in Teacher Training",
      subtitle: "Modern pedagogy meets innovative learning approaches",
      image: "📚"
    },
    {
      title: "Building Tomorrow's Leaders",
      subtitle: "Skilled educators for primary and secondary education",
      image: "👨‍🏫"
    }
  ];

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Diploma Programs",
      description: "Comprehensive training for aspiring teachers in primary and secondary education"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Modern Pedagogy",
      description: "Innovative teaching methods and contemporary educational approaches"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Impact",
      description: "Producing socially responsible educators who uplift their communities"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Partnerships",
      description: "Collaborations with local and international stakeholders"
    }
  ];

  const stats = [
    { number: "100+", label: "Qualified Teachers" },
    { number: "50+", label: "Partner Schools" },
    { number: "5", label: "Years Experience" },
    { number: "98%", label: "Graduate Success Rate" }
  ];


  const styles = {
    gradientBg: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
      minHeight: '100vh'
    },
    nav: {
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.90)',
      backdropFilter: 'blur(20px)',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      transition: 'all 0.3s ease'
    },
    logo: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #2563eb, #0891b2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.1), rgba(14, 116, 144, 0.1))',
      zIndex: 1
    },
    heroContent: {
      position: 'relative',
      zIndex: 2
    },
    gradientText: {
      background: 'linear-gradient(135deg, #1e3a8a, #0e7490)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #2563eb, #0891b2)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: '600',
      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      fontSize: '16px'
    },
    secondaryButton: {
      border: '2px solid #2563eb',
      color: '#2563eb',
      padding: '14px 32px',
      borderRadius: '12px',
      fontWeight: '600',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      fontSize: '16px'
    },
    heroCard: {
      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
      position: 'relative',
      overflow: 'hidden'
    },
    floatingIcon: {
      position: 'absolute',
      top: '-24px',
      right: '-24px',
      width: '80px',
      height: '80px',
      background: '#fbbf24',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'bounce 2s infinite'
    },
    statCard: {
      textAlign: 'center',
      padding: '24px',
      borderRadius: '16px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '8px',
      background: 'linear-gradient(135deg, #2563eb, #0891b2)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      transition: 'transform 0.3s ease'
    },
    featureCard: {
      background: 'white',
      padding: '32px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    featureIcon: {
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
      transition: 'transform 0.3s ease'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #2563eb, #0891b2)',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    },
    ctaButton: {
      background: 'white',
      color: '#2563eb',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '18px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease'
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: mobileMenuOpen ? '0' : '-100%',
      width: '100%',
      height: '100vh',
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      zIndex: 100,
      transition: 'right 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '32px'
    }
  };

  return (
    <div style={styles.gradientBg}>
      

   {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(135deg,rgb(29, 112, 221) 0%, #764ba2 25%, #f093fb 50%,rgb(86, 205, 226) 75%, #4facfe 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.1)',
          zIndex: 1
        }}></div>
        
        {/* Floating geometric shapes */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 2
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          animation: 'float 4s ease-in-out infinite reverse',
          zIndex: 2
        }}></div>
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '80%',
          width: '40px',
          height: '40px',
          background: 'rgba(255, 255, 255, 0.1)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float 5s ease-in-out infinite',
          zIndex: 2
        }}></div>

        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '96px 16px',
          position: 'relative',
          zIndex: 3,
          textAlign: 'center'
        }}>
          {/* Logo and College Name */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '32px',
            transform: isVisible ? 'translateY(0)' : 'translateY(-40px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease'
          }}>
            {/* Logo */}
            <div style={{
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              animation: 'pulse 2s infinite',
              border: '4px solid rgba(255, 255, 255, 0.3)'
            }}>
              <BookOpen style={{ width: '60px', height: '60px', color: 'white' }} />
            </div>
            
            {/* College Names */}
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: 'bold', 
                lineHeight: '1.1', 
                margin: '0 0 16px 0',
                color: 'white',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}>
                Wadani Teachers Training College
              </h1>
              
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '600', 
                margin: '0 0 32px 0',
                background: 'linear-gradient(135deg, #ffeaa7, #fab1a0, #fd79a8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}>
                Kuliyadda Tababarka Macalimiinta ee Wadani
              </h2>
            </div>
            
            {/* Location Badge */}
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              background: 'rgba(255, 255, 255, 0.15)', 
              padding: '12px 24px', 
              borderRadius: '50px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <MapPin style={{ width: '20px', height: '20px', color: '#ffd700' }} />
              <span style={{ fontSize: '16px', fontWeight: '600', color: 'white' }}>Mogadishu, Somalia</span>
            </div>
            
            {/* Description */}
            <p style={{ 
              fontSize: '22px', 
              color: 'rgba(255, 255, 255, 0.9)', 
              lineHeight: '1.6', 
              margin: '0 0 40px 0',
              maxWidth: '800px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
              Empowering the future of Somali education by producing highly qualified, skilled, and socially responsible teachers equipped to uplift their communities.
            </p>
            
            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px',
              alignItems: 'center'
            }} className="sm:flex-row">
              <button 
  style={{
    background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.2)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px) scale(1.08) rotate(1deg)';
    e.currentTarget.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.7), 0 0 30px rgba(240, 147, 251, 0.5)';
    e.currentTarget.style.background = 'linear-gradient(135deg, #764ba2, #667eea, #f093fb, #667eea)';
    e.currentTarget.style.backgroundSize = '400% 400%';
    e.currentTarget.style.animation = 'gradientShift 2s ease infinite';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.2)';
    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)';
    e.currentTarget.style.animation = 'none';
  }}
>
  <span style={{ 
    position: 'relative', 
    zIndex: 2,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
  }}>
    Apply Now
  </span>
  <ChevronRight style={{ 
    width: '20px', 
    height: '20px',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
    transition: 'transform 0.3s ease'
  }} />
</button>
              
              <button 
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Learn More</span>
                <BookOpen style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
          </div>
          
          {/* Floating Stats Cards */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center',
            transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease 0.5s',
            animation: 'breathe 3s ease-in-out infinite'
          }}>
            <div style={{ 
              fontSize: '2rem', 
              color: '#ffd700', 
              marginBottom: '8px'
            }}>🎓</div>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: 'white'
            }}>500+</div>
            <div style={{ 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.8)'
            }}>Graduates</div>
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center',
            transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease 0.7s',
            animation: 'breatheAndFade 4s ease-in-out infinite 1s'
          }}>
            <div style={{ 
              fontSize: '2rem', 
              color: '#4ecdc4', 
              marginBottom: '8px'
            }}>📚</div>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: 'white'
            }}>15+</div>
            <div style={{ 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.8)'
            }}>Programs</div>
          </div>
        </div>
        
        {/* Add CSS animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes breathe {
            0%, 100% { 
              transform: scale(1); 
              opacity: 1;
            }
            50% { 
              transform: scale(1.05); 
              opacity: 0.8;
            }
          }
          @keyframes breatheAndFade {
            0%, 100% { 
              transform: scale(1); 
              opacity: 1;
            }
            25% { 
              transform: scale(1.05); 
              opacity: 0.3;
            }
            50% { 
              transform: scale(1.1); 
              opacity: 0.1;
            }
            75% { 
              transform: scale(1.05); 
              opacity: 0.3;
            }
          }
        `}</style>
      </section>

      {/* Stats Section */}
<section style={{ 
  padding: '80px 0', 
  background: 'white',
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* Background decorative elements */}
  <div style={{
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '200px',
    height: '200px',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: 'float 6s ease-in-out infinite'
  }}></div>
  <div style={{
    position: 'absolute',
    top: '60%',
    right: '15%',
    width: '150px',
    height: '150px',
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: 'float 8s ease-in-out infinite reverse'
  }}></div>

  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', position: 'relative' }}>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '40px' 
    }}>
      {stats.map((stat, index) => (
        <div 
          key={index} 
          style={{
            textAlign: 'center',
            padding: '40px 24px',
            borderRadius: '24px',
            background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            transform: 'translateY(0)',
            animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
          }}
          onMouseEnter={(e) => {
            const statNumber = e.currentTarget.querySelector('.stat-number');
            const card = e.currentTarget;
            
            if (statNumber) {
              statNumber.style.transform = 'scale(1.1) translateY(-5px)';
              statNumber.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)';
              statNumber.style.webkitBackgroundClip = 'text';
              statNumber.style.webkitTextFillColor = 'transparent';
            }
            
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(59, 130, 246, 0.1)';
            card.style.background = 'linear-gradient(145deg, #ffffff, #f1f5f9)';
          }}
          onMouseLeave={(e) => {
            const statNumber = e.currentTarget.querySelector('.stat-number');
            const card = e.currentTarget;
            
            if (statNumber) {
              statNumber.style.transform = 'scale(1) translateY(0)';
              statNumber.style.background = 'linear-gradient(135deg, #1e293b, #334155)';
              statNumber.style.webkitBackgroundClip = 'text';
              statNumber.style.webkitTextFillColor = 'transparent';
            }
            
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06)';
            card.style.background = 'linear-gradient(145deg, #ffffff, #f8fafc)';
          }}
        >
          {/* Card decorative gradient */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: `linear-gradient(90deg, 
              ${index % 4 === 0 ? '#3b82f6' : ''}
              ${index % 4 === 1 ? '#8b5cf6' : ''}
              ${index % 4 === 2 ? '#ec4899' : ''}
              ${index % 4 === 3 ? '#10b981' : ''}
              , 
              ${index % 4 === 0 ? '#8b5cf6' : ''}
              ${index % 4 === 1 ? '#ec4899' : ''}
              ${index % 4 === 2 ? '#10b981' : ''}
              ${index % 4 === 3 ? '#3b82f6' : ''}
            )`
          }}></div>

          {/* Icon background */}
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 24px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, 
              ${index % 4 === 0 ? 'rgba(59, 130, 246, 0.1)' : ''}
              ${index % 4 === 1 ? 'rgba(139, 92, 246, 0.1)' : ''}
              ${index % 4 === 2 ? 'rgba(236, 72, 153, 0.1)' : ''}
              ${index % 4 === 3 ? 'rgba(16, 185, 129, 0.1)' : ''}
              , 
              ${index % 4 === 0 ? 'rgba(139, 92, 246, 0.1)' : ''}
              ${index % 4 === 1 ? 'rgba(236, 72, 153, 0.1)' : ''}
              ${index % 4 === 2 ? 'rgba(16, 185, 129, 0.1)' : ''}
              ${index % 4 === 3 ? 'rgba(59, 130, 246, 0.1)' : ''}
            )`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              fontSize: '32px',
              color: `${index % 4 === 0 ? '#3b82f6' : ''}${index % 4 === 1 ? '#8b5cf6' : ''}${index % 4 === 2 ? '#ec4899' : ''}${index % 4 === 3 ? '#10b981' : ''}`,
              fontWeight: 'bold'
            }}>
             {index % 4 === 0 ? <User className="w-6 h-6" /> : ''}
{index % 4 === 1 ? <Building className="w-6 h-6" /> : ''}
{index % 4 === 2 ? <Gem className="w-6 h-6" /> : ''}
{index % 4 === 3 ? <Star className="w-6 h-6" /> : ''}

            </div>
          </div>

          <div 
            className="stat-number" 
            style={{
              fontSize: '48px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #1e293b, #334155)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '-0.025em'
            }}
          >
            {stat.number}
          </div>
          
          <div style={{ 
            color: '#6b7280', 
            fontWeight: '600',
            fontSize: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease'
          }}>
            {stat.label}
          </div>

          {/* Pulse effect */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            borderRadius: '24px',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse 3s ease-in-out infinite',
            opacity: '0'
          }}></div>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
      }
      50% {
        opacity: 0.3;
        transform: translate(-50%, -50%) scale(1.1);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1.2);
      }
    }
  `}</style>
</section>

      {/* Features Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #dbeafe 0%, white 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#4D7A94' }}>
              Why Choose WTTC?
            </h2>
            <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '768px', margin: '0 auto' }}>
              We bridge the teacher gap through innovative training programs and partnerships with local and international stakeholders.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                  const featureIcon = e.currentTarget.querySelector('.feature-icon');
                  if (featureIcon) {
                    featureIcon.style.transform = 'scale(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                  const featureIcon = e.currentTarget.querySelector('.feature-icon');
                  if (featureIcon) {
                    featureIcon.style.transform = 'scale(1)';
                  }
                }}
              >
                <div className="feature-icon" style={styles.featureIcon}>
                  <div style={{ color: 'white' }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#4D7A94' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Mission & Vision Section */}
<section style={{ padding: '10px 0', background: 'white' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
    {/* Mission & Vision */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', marginBottom: '80px' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px',
        padding: '32px',
        borderRadius: '16px',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f8fafc';
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Target style={{ width: '32px', height: '32px', color: '#2563eb' }} />
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4D7A94', margin: 0 }}>Our Mission</h3>
        </div>
        <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
          To empower the future of Somali education by producing highly qualified, skilled, and socially responsible teachers equipped to uplift their communities.
        </p>
      </div>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px',
        padding: '32px',
        borderRadius: '16px',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f8fafc';
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Eye style={{ width: '32px', height: '32px', color: '#2563eb' }} />
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4D7A94', margin: 0 }}>Our Vision</h3>
        </div>
        <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
          To become a center of excellence in teacher education and professional development in the Horn of Africa.
        </p>
      </div>
    </div>

    {/* Core Values */}
    <div style={{ marginBottom: '80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', justifyContent: 'center' }}>
        <Heart style={{ width: '32px', height: '32px', color: '#2563eb' }} />
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4D7A94', margin: 0 }}>Core Values</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
        {[
          {
            title: 'Excellence',
            description: 'Strive for top teaching standards and continuous improvement.'
          },
          {
            title: 'Integrity',
            description: 'Foster honesty, transparency, and professionalism.'
          },
          {
            title: 'Respect',
            description: 'Value diversity among students, staff, and communities.'
          },
          {
            title: 'Innovation',
            description: 'Employ modern teaching methods and technology.'
          },
          {
            title: 'Collaboration',
            description: 'Promote partnerships among educators, schools, and stakeholders.'
          },
          {
            title: 'Community Service',
            description: 'Prioritize social impact and responsibility.'
          }
        ].map((value, index) => (
          <div key={index} style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb', 
            borderRadius: '12px',
            backgroundColor: '#f9fafb',
            transition: 'all 0.4s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f1f5f9';
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
            e.currentTarget.style.borderColor = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f9fafb';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}>
            <h4 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              color: '#2563eb', 
              margin: '0 0 12px 0' 
            }}>
              {value.title}
            </h4>
            <p style={{ 
              fontSize: '16px', 
              color: '#6b7280', 
              lineHeight: '1.6', 
              margin: 0 
            }}>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Objectives */}
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', justifyContent: 'center' }}>
        <Award style={{ width: '32px', height: '32px', color: '#2563eb' }} />
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4D7A94', margin: 0 }}>Objectives</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        {[
          'Train 500+ teachers annually within five years.',
          'Improve the quality of teaching in Somalia\'s schools.',
          'Foster community development through education.',
          'Provide continuous professional development (CPD) for in-service teachers.',
          'Promote gender equity and inclusivity in teacher training.'
        ].map((objective, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '16px',
            padding: '20px',
            backgroundColor: '#f8fafc',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            transition: 'all 0.4s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f1f5f9';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
            e.currentTarget.style.borderColor = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f8fafc';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = '#e2e8f0';
          }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              backgroundColor: '#2563eb', 
              color: 'white', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              flexShrink: 0
            }}>
              {index + 1}
            </div>
            <p style={{ 
              fontSize: '16px', 
              color: '#4b5563', 
              lineHeight: '1.6', 
              margin: 0 
            }}>
              {objective}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Gallery Section */}
<section style={{ padding: '80px 0', background: '#f8fafc' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
    {/* Gallery Header */}
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
      <h2 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        color: '#4D7A94', 
        marginBottom: '16px',
        margin: 0
      }}>
        Our Campus Gallery
      </h2>
      <p style={{ 
        fontSize: '18px', 
        color: '#6b7280', 
        maxWidth: '600px', 
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        Explore our modern facilities, vibrant learning environment, and the inspiring moments that shape future educators.
      </p>
    </div>

    {/* Gallery Grid */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '24px',
      marginBottom: '40px'
    }}>
      {/* Main Featured Image */}
      <div style={{ 
        gridColumn: 'span 2',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
      }}>
        <img 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Teacher training classroom with students and instructor"
          style={{ 
            width: '100%', 
            height: '400px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          padding: '32px',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 8px 0' }}>
            Modern Learning Environment
          </h3>
          <p style={{ fontSize: '16px', margin: 0, opacity: 0.9 }}>
            State-of-the-art classrooms equipped with interactive technology for effective teacher training.
          </p>
        </div>
      </div>

      {/* Secondary Images */}
      <div style={{ 
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
      }}>
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Students collaborating in group study"
          style={{ 
            width: '100%', 
            height: '250px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          padding: '20px',
          color: 'white'
        }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>
            Collaborative Learning
          </h4>
          <p style={{ fontSize: '14px', margin: 0, opacity: 0.9 }}>
            Students working together in our collaborative spaces.
          </p>
        </div>
      </div>

      <div style={{ 
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
      }}>
        <img 
          src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Library and study area"
          style={{ 
            width: '100%', 
            height: '250px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          padding: '20px',
          color: 'white'
        }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>
            Resource Center
          </h4>
          <p style={{ fontSize: '14px', margin: 0, opacity: 0.9 }}>
            Comprehensive library with educational resources.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Row */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '24px'
    }}>
      <div style={{ 
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
      }}>
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Student presentation"
          style={{ 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          padding: '16px',
          color: 'white'
        }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>
            Student Presentations
          </h4>
        </div>
      </div>

      <div style={{ 
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
      }}>
        <img 
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Teaching practice session"
          style={{ 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          padding: '16px',
          color: 'white'
        }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>
            Teaching Practice
          </h4>
        </div>
      </div>

      <div style={{ 
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
      }}>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop" 
          alt="Graduation ceremony"
          style={{ 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          padding: '16px',
          color: 'white'
        }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>
            Graduation Day
          </h4>
        </div>
      </div>

      <div style={{ 
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'all 0.4s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
      }}>
        <img 
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Campus outdoor activities"
          style={{ 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          padding: '16px',
          color: 'white'
        }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>
            Campus Life
          </h4>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
            Ready to Shape Somalia's Educational Future?
          </h2>
          <p style={{ fontSize: '20px', color: '#bfdbfe', marginBottom: '32px', maxWidth: '512px', margin: '0 auto 32px' }}>
            Join us in our mission to bridge the teacher gap and create lasting impact in education.
          </p>
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
            }}
          >
            Get Started Today
          </button>
        </div>
      </section>

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

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @media (min-width: 768px) {
          .md\\:flex {
            display: flex !important;
          }
          .md\\:hidden {
            display: none !important;
          }
        }

        @media (min-width: 640px) {
          .sm\\:flex-row {
            flex-direction: row !important;
          }
        }

        a:hover {
          color: #2563eb !important;
        }
      `}</style>
    </div>
  );
};

export default Home;
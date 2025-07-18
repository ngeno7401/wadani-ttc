import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, User, MessageCircle, GraduationCap, Clock } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'general',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        inquiryType: 'general',
        message: ''
      });
      setSubmitStatus('');
    }, 3000);
  };

  

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #EBF8FF 0%, #E0E7FF 100%)',
      padding: '3rem 1rem'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    headerTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1A202C',
      marginLeft: '0.75rem'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#4A5568',
      maxWidth: '32rem',
      margin: '0 auto'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '3rem',
      '@media (max-width: 1024px)': {
        gridTemplateColumns: '1fr'
      }
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '2rem'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1A202C',
      marginBottom: '1.5rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1.5rem'
    },
    iconWrapper: {
      padding: '0.75rem',
      borderRadius: '0.5rem',
      marginRight: '1rem'
    },
    iconBlue: {
      backgroundColor: '#DBEAFE',
      color: '#2563EB'
    },
    iconGreen: {
      backgroundColor: '#D1FAE5',
      color: '#059669'
    },
    iconPurple: {
      backgroundColor: '#E9D5FF',
      color: '#7C3AED'
    },
    iconOrange: {
      backgroundColor: '#FED7AA',
      color: '#EA580C'
    },
    contactTitle: {
      fontWeight: '600',
      color: '#1A202C',
      marginBottom: '0.25rem'
    },
    contactText: {
      color: '#4A5568'
    },
    programsList: {
      marginTop: '1rem'
    },
    programItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem'
    },
    programIcon: {
      marginRight: '0.5rem',
      color: '#2563EB'
    },
    programText: {
      color: '#374151'
    },
    successMessage: {
      backgroundColor: '#F0FDF4',
      border: '1px solid #BBF7D0',
      borderRadius: '0.5rem',
      padding: '1rem',
      marginBottom: '1.5rem',
      color: '#166534',
      fontWeight: '500'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    },
    inputGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    inputWrapper: {
      position: 'relative'
    },
    inputIcon: {
      position: 'absolute',
      left: '0.75rem',
      top: '0.75rem',
      color: '#9CA3AF'
    },
    input: {
      width: '100%',
      paddingLeft: '2.5rem',
      paddingRight: '1rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      transition: 'all 0.15s ease-in-out',
      outline: 'none'
    },
    inputFocus: {
      borderColor: '#2563EB',
      boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)'
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      backgroundColor: 'white',
      transition: 'all 0.15s ease-in-out',
      outline: 'none'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      resize: 'vertical',
      minHeight: '120px',
      fontFamily: 'inherit',
      transition: 'all 0.15s ease-in-out',
      outline: 'none'
    },
    button: {
      width: '100%',
      backgroundColor: '#2563EB',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.15s ease-in-out',
      fontSize: '1rem'
    },
    buttonHover: {
      backgroundColor: '#1D4ED8'
    },
    buttonDisabled: {
      opacity: '0.5',
      cursor: 'not-allowed'
    },
    spinner: {
      width: '1.25rem',
      height: '1.25rem',
      border: '2px solid white',
      borderTop: '2px solid transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    missionCard: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '2rem',
      textAlign: 'center',
      marginTop: '3rem'
    },
    missionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1A202C',
      marginBottom: '1rem'
    },
    missionText: {
      fontSize: '1.125rem',
      color: '#4A5568',
      maxWidth: '64rem',
      margin: '0 auto'
    }
  };

  return (
    <>
      <div style={styles.container}>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            .input-focus:focus {
              border-color: #2563EB;
              box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            }
            
            .button-hover:hover {
              background-color: #1D4ED8;
            }
            
            @media (max-width: 768px) {
              .grid-container {
                grid-template-columns: 1fr;
              }
              .form-grid {
                grid-template-columns: 1fr;
              }
              .title {
                font-size: 2rem;
              }
            }
          `}
        </style>
        
        <div style={styles.maxWidth}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerTitle}>
              <GraduationCap size={48} color="#2563EB" />
              <h1 style={styles.title}>Wadani Teachers Training College</h1>
            </div>
            <p style={styles.subtitle}>
              Empowering the future of Somali education through excellence in teacher training
            </p>
          </div>

          <div style={styles.gridContainer} className="grid-container">
            {/* Contact Information */}
            <div>
              <div style={styles.card}>
                <h2 style={styles.cardTitle}>Get in Touch</h2>
                
                <div>
                  <div style={styles.contactItem}>
                    <div style={{...styles.iconWrapper, ...styles.iconBlue}}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 style={styles.contactTitle}>Location</h3>
                      <p style={styles.contactText}>Mogadishu, Banadir, Somalia</p>
                    </div>
                  </div>

                  <div style={styles.contactItem}>
                    <div style={{...styles.iconWrapper, ...styles.iconGreen}}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 style={styles.contactTitle}>Phone</h3>
                      <p style={styles.contactText}>+252 612 971520</p>
                    </div>
                  </div>

                  <div style={styles.contactItem}>
                    <div style={{...styles.iconWrapper, ...styles.iconPurple}}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 style={styles.contactTitle}>Email</h3>
                      <p style={styles.contactText}>info@wadanittc.so</p>
                    </div>
                  </div>

                  <div style={styles.contactItem}>
                    <div style={{...styles.iconWrapper, ...styles.iconOrange}}>
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3 style={styles.contactTitle}>Website</h3>
                      <p style={styles.contactText}>www.wadanittc.so</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programs Overview */}
              <div style={{...styles.card, marginTop: '2rem'}}>
                <h3 style={styles.cardTitle}>Our Programs</h3>
                <div style={styles.programsList}>
                  <div style={styles.programItem}>
                    <Clock size={16} style={styles.programIcon} />
                    <span style={styles.programText}>Diploma in Primary Education (2 years)</span>
                  </div>
                  <div style={styles.programItem}>
                    <Clock size={16} style={styles.programIcon} />
                    <span style={styles.programText}>Certificate in Early Childhood Development (1 year)</span>
                  </div>
                  <div style={styles.programItem}>
                    <Clock size={16} style={styles.programIcon} />
                    <span style={styles.programText}>Diploma in Secondary Education (2 years)</span>
                  </div>
                  <div style={styles.programItem}>
                    <Clock size={16} style={styles.programIcon} />
                    <span style={styles.programText}>Professional Development Programs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div style={styles.successMessage}>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <div>
                <div style={styles.formGrid} className="form-grid">
                  <div>
                    <label style={styles.label}>
                      Full Name *
                    </label>
                    <div style={styles.inputWrapper}>
                      <User size={20} style={styles.inputIcon} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={styles.input}
                        className="input-focus"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label style={styles.label}>
                      Email Address *
                    </label>
                    <div style={styles.inputWrapper}>
                      <Mail size={20} style={styles.inputIcon} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={styles.input}
                        className="input-focus"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div style={styles.formGrid} className="form-grid">
                  <div>
                    <label style={styles.label}>
                      Phone Number
                    </label>
                    <div style={styles.inputWrapper}>
                      <Phone size={20} style={styles.inputIcon} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={styles.input}
                        className="input-focus"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={styles.label}>
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      style={styles.select}
                      className="input-focus"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admission">Admission Information</option>
                      <option value="programs">Program Details</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="cpd">Professional Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={styles.input}
                    className="input-focus"
                    placeholder="Enter the subject of your inquiry"
                    required
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    className="input-focus"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{
                    ...styles.button,
                    ...(isSubmitting ? styles.buttonDisabled : {})
                  }}
                  className="button-hover"
                >
                  {isSubmitting ? (
                    <>
                      <div style={styles.spinner}></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
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
    </>
  );
}
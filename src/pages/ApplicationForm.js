import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    telephone: '',
    course_applied: '',
    alt_contact: '',
    email: '',
    address: ''
  });

  const [status, setStatus] = useState('');
  const [hovered, setHovered] = useState(false);

  const courses = [
    "Diploma in Primary Education – 2 years",
    "Certificate in Early Childhood Development – 1 year",
    "Diploma in Secondary Education – 2 years",
    "Diploma in Special Needs Education – 2 years",
    "Post-Graduate Diploma in Education – 1 year",
    "Short Course: Institutional Leadership and Management",
    "Short Course: Institutional Finance Management for school Bursars",
    "Professional Development Program – For in-service teachers and school administrators"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { full_name, telephone, course_applied, alt_contact } = formData;
    if (!full_name || !telephone || !course_applied || !alt_contact) {
      setStatus('Please fill in all mandatory fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost/wadani/submit_application.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('Application submitted successfully!');
        setFormData({
          full_name: '',
          telephone: '',
          course_applied: '',
          alt_contact: '',
          email: '',
          address: ''
        });
      } else {
        setStatus('Error: ' + result.message);
      }
    } catch (error) {
      setStatus('Submission failed. Make sure the server is running.');
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #ffffff, #e9f0ff)',
      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif',
    },
    title: {
      fontSize: '28px',
      marginBottom: '25px',
      textAlign: 'center',
      color: '#2c3e50',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#34495e',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '20px',
      borderRadius: '8px',
      border: '1px solid #bfc9d9',
      fontSize: '16px',
      backgroundColor: '#f7fbff',
      transition: 'border-color 0.3s ease',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      height: '90px',
      borderRadius: '8px',
      border: '1px solid #bfc9d9',
      fontSize: '16px',
      resize: 'vertical',
      backgroundColor: '#f7fbff',
      marginBottom: '20px',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: hovered ? '#0056b3' : '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      boxShadow: hovered ? '0 4px 12px rgba(0, 91, 187, 0.3)' : '0 2px 6px rgba(0, 0, 0, 0.15)',
    },
    status: {
      marginTop: '15px',
      textAlign: 'center',
      fontWeight: '600',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>Full Name*:</label>
        <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Telephone Number*:</label>
        <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Course Applied For*:</label>
        <select name="course_applied" value={formData.course_applied} onChange={handleChange} style={styles.input} required>
          <option value="">-- Select Course --</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>

        <label style={styles.label}>Alternative Contact Number*:</label>
        <input type="tel" name="alt_contact" value={formData.alt_contact} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />

        <label style={styles.label}>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} style={styles.textarea}></textarea>

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Submit Application
        </button>
      </form>

      {status && (
        <p style={{
          ...styles.status,
          color: status.toLowerCase().includes('success') ? 'green' : 'crimson'
        }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default ApplicationForm;

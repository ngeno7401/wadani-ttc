import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const navigate = useNavigate();

  const isValidPassword = (pwd) => pwd.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPassword(newPassword)) {
      setMessage('New password must be at least 6 characters.');
      return;
    }

    if (!currentPassword) {
      setMessage('Please enter your current password.');
      return;
    }

    setShowConfirm(true);
  };

  const handleChangePassword = () => {
    fetch('http://localhost/wadani/change_password.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        current_password: currentPassword,
        new_password: newPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        if (data.status === 'success') {
          setTimeout(() => navigate('/admin/login'), 2000);
        }
      })
      .catch((err) => {
        console.error(err);
        setMessage('An error occurred while changing the password.');
      });
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      borderRadius: '12px',
    },
    heading: {
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#333',
    },
    inputGroup: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    input: {
      flex: 1,
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '14px',
      outline: 'none',
    },
    showBtn: {
      marginLeft: '10px',
      padding: '6px 10px',
      fontSize: '12px',
      borderRadius: '6px',
      cursor: 'pointer',
      backgroundColor: '#eee',
      border: '1px solid #ccc',
    },
    btnPrimary: {
      padding: '10px',
      width: '100%',
      marginTop: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '15px',
    },
    btnDanger: {
      padding: '10px',
      width: '100%',
      marginTop: '10px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '15px',
    },
    message: {
      marginTop: '15px',
      textAlign: 'center',
      color: message.includes('success') ? 'green' : 'red',
      fontSize: '14px',
    },
    confirmBox: {
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f1f1f1',
      borderRadius: '10px',
      textAlign: 'center',
    },
    confirmBtn: {
      padding: '8px 14px',
      marginRight: '10px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    cancelBtn: {
      padding: '8px 14px',
      backgroundColor: 'gray',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Change Admin Password</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <input
            type={showCurrent ? 'text' : 'password'}
            value={currentPassword}
            placeholder="Current Password"
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            style={styles.showBtn}
          >
            {showCurrent ? 'Hide' : 'Show'}
          </button>
        </div>

        <div style={styles.inputGroup}>
          <input
            type={showNew ? 'text' : 'password'}
            value={newPassword}
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            style={styles.showBtn}
          >
            {showNew ? 'Hide' : 'Show'}
          </button>
        </div>

        <button type="submit" style={styles.btnPrimary}>
          Update Password
        </button>
        <button
          type="button"
          onClick={() => navigate('/admin/login')}
          style={styles.btnDanger}
        >
          Back to Login
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}

      {showConfirm && (
        <div style={styles.confirmBox}>
          <p>Are you sure you want to change your password?</p>
          <button onClick={handleChangePassword} style={styles.confirmBtn}>
            Yes, Confirm
          </button>
          <button onClick={() => setShowConfirm(false)} style={styles.cancelBtn}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangeName = () => {
  const [newName, setNewName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    e.preventDefault();

    fetch('http://localhost/wadani/change_name.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ new_name: newName })
    })
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);

        if (data.status === 'success') {
          localStorage.setItem('admin_name', newName);
          setTimeout(() => {
            navigate('/admin/login');
          }, 2000);
        }
      })
      .catch(err => {
        console.error(err);
        setMessage('An error occurred while changing the name.');
      });
  };

  const goToLogin = () => {
    navigate('/admin/login');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f5f9',
      padding: '20px'
    }}>
      <div style={{
        background: '#fff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>Change Admin Name</h2>
        <form onSubmit={handleChangeName}>
          <input
            type="text"
            value={newName}
            placeholder="Enter New Name"
            onChange={(e) => setNewName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          />
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: '#4f46e5',
            color: '#fff',
            fontSize: '16px',
            border: 'none',
            marginBottom: '10px',
            cursor: 'pointer'
          }}>
            Update Name
          </button>
          <button
            type="button"
            onClick={goToLogin}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: '#e11d48',
              color: '#fff',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Back to Login
          </button>
        </form>
        {message && (
          <p style={{ marginTop: '20px', color: '#16a34a', fontWeight: '500' }}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default ChangeName;

import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as XLSX from 'xlsx';

const AdminPanel = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const adminName = localStorage.getItem('admin_name') || 'Admin';

  useEffect(() => {
    fetch('http://localhost/wadani/get_applications.php')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setApplications(data.data);
          setFilteredApps(data.data);
        } else {
          setError('Failed to fetch applications');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Unable to connect to server');
        setLoading(false);
      });
  }, []);

  const updateStatus = (id, newStatus) => {
    if (!window.confirm(`Are you sure you want to change status to "${newStatus}"?`)) return;

    fetch('http://localhost/wadani/update_status.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setApplications(prev =>
            prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
          );
          setFilteredApps(prev =>
            prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
          );
          setStatusMsg(`Status updated to "${newStatus}"`);
          setTimeout(() => setStatusMsg(''), 3000);
        } else {
          setStatusMsg('Failed to update status');
          setTimeout(() => setStatusMsg(''), 3000);
        }
      })
      .catch(err => {
        console.error(err);
        setStatusMsg('Error connecting to server');
        setTimeout(() => setStatusMsg(''), 3000);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    localStorage.removeItem('admin_name');
    navigate('/admin/login');
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = applications.filter(app =>
      app.full_name.toLowerCase().includes(value) ||
      app.course_applied.toLowerCase().includes(value) ||
      app.status.toLowerCase().includes(value)
    );

    setFilteredApps(filtered);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredApps);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications');
    XLSX.writeFile(workbook, 'applications.xlsx');
  };

  const getStatusBadgeStyle = (status) => {
    const baseStyle = {
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      border: 'none',
      display: 'inline-block'
    };

    switch (status.toLowerCase()) {
      case 'admitted':
        return { ...baseStyle, backgroundColor: '#d4edda', color: '#155724' };
      case 'rejected':
        return { ...baseStyle, backgroundColor: '#f8d7da', color: '#721c24' };
      case 'on hold':
        return { ...baseStyle, backgroundColor: '#fff3cd', color: '#856404' };
      default:
        return { ...baseStyle, backgroundColor: '#e2e3e5', color: '#6c757d' };
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '16px 24px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{
            margin: '0',
            fontSize: '24px',
            fontWeight: '700',
            color: '#1e293b',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Admin Dashboard
          </h1>
          
          {/* Admin Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowDropdown(prev => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
                backgroundColor: '#f1f5f9',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                color: '#475569',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: '#e2e8f0'
                }
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e2e8f0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f1f5f9'}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#667eea',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '8px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                {adminName.charAt(0).toUpperCase()}
              </div>
              {adminName.charAt(0).toUpperCase() + adminName.slice(1)}
              <span style={{ marginLeft: '8px', fontSize: '12px' }}>▼</span>
            </button>
            
            {showDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: '0',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                minWidth: '180px',
                marginTop: '4px',
                overflow: 'hidden'
              }}>
                <Link
                  to="/admin/change-name"
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    color: '#475569',
                    fontSize: '14px',
                    transition: 'background-color 0.2s ease',
                    borderBottom: '1px solid #f1f5f9'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Change Name
                </Link>
                <Link
                  to="/admin/change-password"
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    color: '#475569',
                    fontSize: '14px',
                    transition: 'background-color 0.2s ease',
                    borderBottom: '1px solid #f1f5f9'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Change Password
                </Link>
                <button
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: '#dc2626',
                    fontSize: '14px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#fef2f2'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px'
      }}>
        {/* Status Message */}
        {statusMsg && (
          <div style={{
            padding: '12px 16px',
            backgroundColor: statusMsg.includes('Failed') || statusMsg.includes('Error') ? '#fef2f2' : '#f0fdf4',
            color: statusMsg.includes('Failed') || statusMsg.includes('Error') ? '#dc2626' : '#16a34a',
            borderRadius: '8px',
            marginBottom: '24px',
            border: `1px solid ${statusMsg.includes('Failed') || statusMsg.includes('Error') ? '#fecaca' : '#bbf7d0'}`,
            fontSize: '14px',
            fontWeight: '500'
          }}>
            {statusMsg}
          </div>
        )}

        {/* Controls Section */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          marginBottom: '24px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by name, course, or status..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  backgroundColor: '#ffffff'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
            <button
              onClick={exportToExcel}
              style={{
                padding: '12px 24px',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(102, 126, 234, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5b21b6';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 8px rgba(102, 126, 234, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#667eea';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(102, 126, 234, 0.2)';
              }}
            >
              📊 Export to Excel
            </button>
          </div>
        </div>

        {/* Applications Summary */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>
              Total Applications
            </h3>
            <p style={{ margin: '0', fontSize: '24px', fontWeight: '700', color: '#1e293b' }}>
              {applications.length}
            </p>
          </div>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>
              Filtered Results
            </h3>
            <p style={{ margin: '0', fontSize: '24px', fontWeight: '700', color: '#1e293b' }}>
              {filteredApps.length}
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div style={{
            backgroundColor: '#ffffff',
            padding: '48px',
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid #e2e8f0',
              borderTop: '4px solid #667eea',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px'
            }}></div>
            <p style={{ margin: '0', color: '#6b7280', fontSize: '16px' }}>Loading applications...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#dc2626',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredApps.length === 0 && !error && (
          <div style={{
            backgroundColor: '#ffffff',
            padding: '48px',
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{ margin: '0', color: '#6b7280', fontSize: '16px' }}>
              {searchTerm ? 'No applications match your search criteria.' : 'No applications found.'}
            </p>
          </div>
        )}

        {/* Applications Table */}
        {!loading && filteredApps.length > 0 && (
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ID</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Telephone</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Course</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Alt Contact</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Address</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Submitted</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: '600', color: '#374151', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApps.map((app, index) => (
                    <tr key={app.id} style={{
                      borderBottom: '1px solid #f1f5f9',
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafbfc'
                    }}>
                      <td style={{ padding: '16px 12px', color: '#6b7280', fontWeight: '500' }}>{app.id}</td>
                      <td style={{ padding: '16px 12px', color: '#1e293b', fontWeight: '500' }}>{app.full_name}</td>
                      <td style={{ padding: '16px 12px', color: '#6b7280' }}>{app.telephone}</td>
                      <td style={{ padding: '16px 12px', color: '#6b7280' }}>{app.course_applied}</td>
                      <td style={{ padding: '16px 12px', color: '#6b7280' }}>{app.alt_contact}</td>
                      <td style={{ padding: '16px 12px', color: '#6b7280' }}>{app.email || '-'}</td>
                      <td style={{ padding: '16px 12px', color: '#6b7280' }}>{app.address || '-'}</td>
                      <td style={{ padding: '16px 12px' }}>
                        <span style={getStatusBadgeStyle(app.status)}>
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </span>
                      </td>
                      <td style={{ padding: '16px 12px', color: '#6b7280', fontSize: '13px' }}>
                        {new Date(app.created_at).toLocaleString()}
                      </td>
                      <td style={{ padding: '16px 12px' }}>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          <button
                            onClick={() => updateStatus(app.id, 'Admitted')}
                            style={{
                              padding: '6px 12px',
                              backgroundColor: '#22c55e',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '500',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#22c55e'}
                          >
                            Admit
                          </button>
                          <button
                            onClick={() => updateStatus(app.id, 'On Hold')}
                            style={{
                              padding: '6px 12px',
                              backgroundColor: '#f59e0b',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '500',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#d97706'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#f59e0b'}
                          >
                            Hold
                          </button>
                          <button
                            onClick={() => updateStatus(app.id, 'Rejected')}
                            style={{
                              padding: '6px 12px',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: '500',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
};

export default AdminPanel;
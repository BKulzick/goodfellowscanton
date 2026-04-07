import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { applications } = useAppContext();
  const [filter, setFilter] = useState('all');

  const filteredApps = applications.filter(
    (app) => filter === 'all' || app.status === filter
  );

  const stats = {
    total: applications.length,
    submitted: applications.filter((a) => a.status === 'submitted').length,
    approved: applications.filter((a) => a.status === 'approved').length,
    denied: applications.filter((a) => a.status === 'denied').length,
  };

  return (
    <div className="scr on">
      <div className="sbar lt" style={{ background: 'var(--navy)' }}>
        <span></span>
        <span>9:41</span>
        <span></span>
      </div>

      <button className="back" onClick={() => navigate('/')}>
        ‹
      </button>

      <div className="hero">
        <h2>Admin Dashboard</h2>
        <p>Review applications & manage approvals</p>
      </div>

      {/* Stats */}
      <div className="stat-strip">
        <div className="stat-cell">
          <div className="stat-num">{stats.total}</div>
          <div className="stat-lbl">Total</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">{stats.submitted}</div>
          <div className="stat-lbl">Pending</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">{stats.approved}</div>
          <div className="stat-lbl">Approved</div>
        </div>
      </div>

      {/* Filter */}
      <div style={{ padding: '14px 16px', background: 'white', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
          {['all', 'submitted', 'under-review', 'approved', 'denied'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              style={{
                padding: '8px 14px',
                fontSize: '11px',
                fontWeight: 700,
                border: filter === status ? '2px solid var(--navy)' : '1.5px solid var(--border)',
                borderRadius: '20px',
                background: filter === status ? 'var(--navy)' : 'white',
                color: filter === status ? 'white' : 'var(--navy)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textTransform: 'capitalize',
                whiteSpace: 'nowrap',
              }}
            >
              {status === 'all' ? 'All' : status}
            </button>
          ))}
        </div>
      </div>

      {/* Applications List */}
      <div style={{ padding: '14px' }}>
        {filteredApps.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--muted)' }}>
            No applications found
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => navigate(`/admin/${app.id}`)}
                style={{
                  background: 'white',
                  border: '1.5px solid var(--border)',
                  borderRadius: '12px',
                  padding: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>{app.familyName}</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                      {app.childrenCount} children
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background:
                        app.status === 'approved'
                          ? 'var(--green-bg)'
                          : app.status === 'denied'
                            ? '#fee2e2'
                            : 'var(--gold-bg)',
                      color:
                        app.status === 'approved'
                          ? 'var(--green)'
                          : app.status === 'denied'
                            ? '#dc2626'
                            : 'var(--gold)',
                      textTransform: 'capitalize',
                    }}
                  >
                    {app.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

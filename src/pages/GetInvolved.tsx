import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GetInvolved: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('sponsor');

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
        <h2>Donate & Get Involved</h2>
        <p>Help us make a difference</p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          background: 'white',
          borderBottom: '1px solid var(--border)',
          padding: '0 16px',
          borderTop: '1px solid var(--border)',
          overflowX: 'auto',
        }}
      >
        {['sponsor', 'volunteer', 'donate', 'kroger'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '14px 12px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: 700,
              color: activeTab === tab ? 'var(--navy)' : 'var(--muted)',
              borderBottom: activeTab === tab ? '3px solid var(--navy)' : 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            {tab === 'sponsor' && '⭐ Sponsor'}
            {tab === 'volunteer' && '🤝 Volunteer'}
            {tab === 'donate' && '💝 Donate'}
            {tab === 'kroger' && '🛒 Kroger'}
          </button>
        ))}
      </div>

      <div className="fb">
        {activeTab === 'sponsor' && (
          <>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>
              Sponsor a Child
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.8, marginBottom: '16px' }}>
              Make a child's Christmas unforgettable. When you sponsor a child, you'll receive their wish list and age information. You can shop for gifts that bring joy and hope to our community.
            </p>
            <button className="btn-primary" onClick={() => navigate('/sponsor')}>
              Browse & Sponsor
            </button>
          </>
        )}

        {activeTab === 'volunteer' && (
          <>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>
              Volunteer with Us
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.8, marginBottom: '16px' }}>
              We need volunteers for:
            </p>
            <ul style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '16px' }}>
              <li>Gift wrapping and organization</li>
              <li>Family interview and intake</li>
              <li>Pickup Day logistics (December)</li>
              <li>Administrative support</li>
            </ul>
            <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '16px' }}>
              Email us to learn about current opportunities.
            </p>
            <button className="btn-primary" style={{ background: 'var(--green)' }}>
              Get Involved as Volunteer
            </button>
          </>
        )}

        {activeTab === 'donate' && (
          <>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>
              Make a Donation
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.8, marginBottom: '16px' }}>
              Your donation helps us provide gifts, organize our program, and support families in Canton Township.
            </p>
            <div
              style={{
                background: 'var(--gold-bg)',
                border: '1.5px solid #e5d080',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '16px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>
                💳 Donation Options
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.8 }}>
                • Online donation via our website
                <br />• Check (payable to Canton Goodfellows)
                <br />• Cash at our office
                <br />• Sponsorship of an entire family
              </div>
            </div>
            <button className="btn-primary" style={{ background: 'var(--red)' }}>
              Make a Donation
            </button>
          </>
        )}

        {activeTab === 'kroger' && (
          <>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>
              Kroger Community Rewards
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.8, marginBottom: '16px' }}>
              Support Canton Goodfellows every time you shop — at no extra cost!
            </p>
            <div
              style={{
                background: '#FFF8EE',
                border: '1.5px solid #FFB366',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '16px',
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 900, color: '#FF9900', marginBottom: '8px', letterSpacing: '2px' }}>
                62754
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.6 }}>
                <strong>Our Organization ID:</strong> Search "Canton Goodfellows" or use <strong>62754</strong> when enrolling at Kroger.com Community Rewards.
              </div>
            </div>
            <div style={{ background: 'var(--green-bg)', border: '1.5px solid #a3d4b5', borderRadius: '12px', padding: '12px 14px' }}>
              <div style={{ fontSize: '12px', color: '#1a7a4a' }}>
                ✅ <strong>Already enrolled?</strong> Your selection carries over automatically—no need to re-enroll each April!
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GetInvolved;

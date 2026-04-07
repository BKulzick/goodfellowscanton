import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const About: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mission');

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
        <h2>About Goodfellows</h2>
        <p>Canton Township, Michigan</p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          background: 'white',
          borderBottom: '1px solid var(--border)',
          padding: '0 16px',
          gap: '0',
          borderTop: '1px solid var(--border)',
        }}
      >
        {['mission', 'how', 'history', 'board'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: '14px 0',
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
            }}
          >
            {tab === 'mission' && 'Mission'}
            {tab === 'how' && 'How It Works'}
            {tab === 'history' && 'History'}
            {tab === 'board' && 'Board'}
          </button>
        ))}
      </div>

      <div className="fb">
        {activeTab === 'mission' && (
          <>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.8, marginBottom: '14px' }}>
              No Child Without a Christmas. That's the mission of the Canton Goodfellows. Since the 1940s, our program has worked to bring joy and dignity to children and families in our community during the holiday season.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.8 }}>
              Every child deserves to experience the magic of Christmas. Through our volunteer network, donations, and community partnerships, we ensure that no child in Canton Township is without a gift on Christmas morning.
            </p>
          </>
        )}

        {activeTab === 'how' && (
          <>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '14px' }}>
              How the Program Works
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { num: '1', title: 'Application', desc: 'Families in need apply during October–November' },
                { num: '2', title: 'Review', desc: 'Goodfellows board reviews and approves applications' },
                { num: '3', title: 'Sponsorship', desc: 'Volunteers and donors sponsor children from approved families' },
                { num: '4', title: 'Delivery', desc: 'Gifts are delivered during our annual Pickup Day in December' },
              ].map((step) => (
                <div key={step.num} style={{ display: 'flex', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--navy)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>{step.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'history' && (
          <>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>
              Our History
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.8 }}>
              Founded in the 1940s, the Canton Goodfellows has been a beacon of hope for families in need across Canton Township for over 80 years. What started as a small group of dedicated community members has grown into a powerful network of volunteers, sponsors, and donors.
            </p>
          </>
        )}

        {activeTab === 'board' && (
          <>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '14px' }}>
              Board Members
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--text)', marginBottom: '12px' }}>
              For more information about our board members, please contact us at:
            </p>
            <div
              style={{
                background: 'var(--green-bg)',
                border: '1.5px solid #a3d4b5',
                borderRadius: '12px',
                padding: '14px',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '6px' }}>
                Contact Us
              </div>
              <div style={{ fontSize: '13px', color: 'var(--navy)', fontWeight: 600 }}>
                📞 (734) 664-1044
              </div>
              <div style={{ fontSize: '13px', color: 'var(--navy)', fontWeight: 600, marginTop: '4px' }}>
                📧 cantongoodfellows@gmail.com
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default About;

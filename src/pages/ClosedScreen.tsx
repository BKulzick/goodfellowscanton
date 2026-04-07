import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ClosedScreen: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

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
        <h2>Applications Closed</h2>
      </div>

      <div className="fb" style={{ textAlign: 'center', paddingTop: '40px' }}>
        <div
          style={{
            fontSize: '64px',
            marginBottom: '20px',
            background: '#fdecea',
            padding: '30px',
            borderRadius: '20px',
            display: 'inline-block',
          }}
        >
          📅
        </div>

        <h2
          style={{
            fontSize: '22px',
            fontWeight: 700,
            color: 'var(--navy)',
            marginBottom: '8px',
            fontFamily: "'Merriweather', serif",
          }}
        >
          Applications are Closed
        </h2>

        <p
          style={{
            fontSize: '14px',
            color: 'var(--text)',
            lineHeight: 1.6,
            marginBottom: '20px',
          }}
        >
          The {currentYear} application window ran from <strong>October 1</strong> to <strong>November 15</strong>.
        </p>

        <div
          style={{
            background: 'var(--green-bg)',
            border: '1.5px solid #a3d4b5',
            borderRadius: '12px',
            padding: '18px',
            marginBottom: '24px',
          }}
        >
          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--green)', marginBottom: '4px' }}>
            NEXT WINDOW
          </div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>
            October 1, {currentYear + 1}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text)' }}>
            Mark your calendar — applications are reviewed first-come, first-served.
          </div>
        </div>

        <button className="btn-primary" onClick={() => navigate('/')}>
          Return Home
        </button>
      </div>
    </div>
  );
};

export default ClosedScreen;

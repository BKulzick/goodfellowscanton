import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ApplicationSubmitted: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="scr on">
      <div className="sbar lt" style={{ background: 'var(--navy)' }}>
        <span></span>
        <span>9:41</span>
        <span></span>
      </div>

      <div className="hero">
        <h2>Application Submitted</h2>
      </div>

      <div className="fb" style={{ textAlign: 'center', paddingTop: '40px' }}>
        <div
          style={{
            fontSize: '64px',
            marginBottom: '20px',
            background: 'var(--green-bg)',
            padding: '30px',
            borderRadius: '20px',
            display: 'inline-block',
          }}
        >
          ✅
        </div>

        <h2
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--green)',
            marginBottom: '12px',
            fontFamily: "'Merriweather', serif",
          }}
        >
          Thank You!
        </h2>

        <p
          style={{
            fontSize: '14px',
            color: 'var(--text)',
            lineHeight: 1.6,
            marginBottom: '20px',
          }}
        >
          Your application has been submitted successfully. Our team will review it and contact you within 3-5 business days.
        </p>

        <div
          style={{
            background: 'var(--gold-bg)',
            border: '1.5px solid #e5d080',
            borderRadius: '12px',
            padding: '18px',
            marginBottom: '24px',
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
            📧 What's Next?
          </div>
          <ul style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.8, paddingLeft: '20px' }}>
            <li>We'll send a confirmation email to confirm receipt</li>
            <li>Applications are reviewed on a first-come, first-served basis</li>
            <li>You can check your status anytime using the Check Status option on our home screen</li>
          </ul>
        </div>

        <button className="btn-primary" onClick={() => navigate('/')}>
          Return Home
        </button>
      </div>
    </div>
  );
};

export default ApplicationSubmitted;

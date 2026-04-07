import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const StatusCheck: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted' | 'review' | 'approved' | 'denied' | 'not-found'>('idle');

  const handleCheck = () => {
    if (!email) return;
    // Mock lookup - in real app, would query Firestore
    const statuses: ('submitted' | 'review' | 'approved' | 'denied' | 'not-found')[] = ['submitted', 'review', 'approved', 'denied', 'not-found'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setStatus(randomStatus);
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
        <h2>Check My Application</h2>
        <p>Look up your current status</p>
      </div>

      <div className="fb">
        {status === 'idle' && (
          <>
            <label className="flabel">Email Address</label>
            <input
              className="finput"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '10px', lineHeight: 1.6 }}>
              Enter the email address you used when submitting your application. We'll look up your status for you.
            </p>

            <button className="btn-primary" onClick={handleCheck} disabled={!email}>
              Check Status
            </button>
          </>
        )}

        {status === 'submitted' && (
          <>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>
              <div
                style={{
                  fontSize: '56px',
                  marginBottom: '16px',
                  background: 'var(--gold-bg)',
                  padding: '24px',
                  borderRadius: '16px',
                  display: 'inline-block',
                }}
              >
                📬
              </div>

              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  marginBottom: '8px',
                  fontFamily: "'Merriweather', serif",
                }}
              >
                Application Received
              </h2>

              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                Your application has been received and is in the queue for review. Applications are reviewed on a first-come, first-served basis.
              </p>
            </div>

            <div
              style={{
                background: 'var(--gold-bg)',
                border: '1.5px solid #e5d080',
                borderRadius: '12px',
                padding: '14px',
                marginBottom: '16px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', marginBottom: '6px' }}>
                ⏱️ What's Next?
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.6 }}>
                Our team will review your application and contact you by phone or email within 3-5 business days with a decision.
              </div>
            </div>

            <button className="btn-primary" onClick={() => { setStatus('idle'); setEmail(''); }}>
              Check Another Application
            </button>
          </>
        )}

        {status === 'review' && (
          <>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>
              <div
                style={{
                  fontSize: '56px',
                  marginBottom: '16px',
                  background: 'var(--lt-gray)',
                  padding: '24px',
                  borderRadius: '16px',
                  display: 'inline-block',
                }}
              >
                🔍
              </div>

              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  marginBottom: '8px',
                  fontFamily: "'Merriweather', serif",
                }}
              >
                Under Review
              </h2>

              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                Your application is currently being reviewed by our Goodfellows board. You should hear from us very soon!
              </p>
            </div>

            <button className="btn-primary" onClick={() => { setStatus('idle'); setEmail(''); }}>
              Check Another Application
            </button>
          </>
        )}

        {status === 'approved' && (
          <>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>
              <div
                style={{
                  fontSize: '56px',
                  marginBottom: '16px',
                  background: 'var(--green-bg)',
                  padding: '24px',
                  borderRadius: '16px',
                  display: 'inline-block',
                }}
              >
                🎉
              </div>

              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--green)',
                  marginBottom: '8px',
                  fontFamily: "'Merriweather', serif",
                }}
              >
                Approved!
              </h2>

              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                Great news! Your family has been approved for assistance. Your children will be included in our sponsorship program.
              </p>
            </div>

            <div
              style={{
                background: 'var(--green-bg)',
                border: '1.5px solid #a3d4b5',
                borderRadius: '12px',
                padding: '14px',
                marginBottom: '16px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--green)', marginBottom: '6px' }}>
                📅 Pickup Day: December 15
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.6 }}>
                Mark your calendar for our Pickup Day event. You'll be contacted soon with location and time details.
              </div>
            </div>

            <button className="btn-primary" onClick={() => { setStatus('idle'); setEmail(''); }}>
              Check Another Application
            </button>
          </>
        )}

        {status === 'denied' && (
          <>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>
              <div
                style={{
                  fontSize: '56px',
                  marginBottom: '16px',
                  background: '#fee2e2',
                  padding: '24px',
                  borderRadius: '16px',
                  display: 'inline-block',
                }}
              >
                💌
              </div>

              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#dc2626',
                  marginBottom: '8px',
                  fontFamily: "'Merriweather', serif",
                }}
              >
                Application Status
              </h2>

              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                Thank you for applying to Canton Goodfellows. Unfortunately, we were unable to approve your application at this time.
              </p>
            </div>

            <div
              style={{
                background: '#fef2f2',
                border: '1.5px solid #fca5a5',
                borderRadius: '12px',
                padding: '14px',
                marginBottom: '16px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#dc2626', marginBottom: '6px' }}>
                📞 Questions?
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.6 }}>
                Please contact us to discuss your application or to reapply next year.
              </div>
            </div>

            <button className="btn-primary" onClick={() => { setStatus('idle'); setEmail(''); }}>
              Check Another Application
            </button>
          </>
        )}

        {status === 'not-found' && (
          <>
            <div style={{ textAlign: 'center', paddingTop: '40px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>❓</div>

              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  marginBottom: '8px',
                  fontFamily: "'Merriweather', serif",
                }}
              >
                No Application Found
              </h2>

              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                We couldn't find an application associated with this email address.
              </p>

              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                Double-check the email or contact us for help.
              </p>
            </div>

            <button className="btn-primary" onClick={() => { setStatus('idle'); setEmail(''); }}>
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusCheck;

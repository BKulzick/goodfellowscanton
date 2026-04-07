import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  const OPEN_MONTH = 9; // October (0-indexed)
  const OPEN_DAY = 1;
  const CLOSE_MONTH = 10; // November (0-indexed)
  const CLOSE_DAY = 15;

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const open = new Date(year, OPEN_MONTH, OPEN_DAY);
    const close = new Date(year, CLOSE_MONTH, CLOSE_DAY, 23, 59, 59);

    const appOpen = now >= open && now <= close;
    setIsAppOpen(appOpen);

    const diff = close.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysLeft(days);
  }, []);

  const handleApply = () => {
    navigate(isAppOpen ? '/apply/step1' : '/closed');
  };

  return (
    <div className="scr on">
      {/* Status Bar */}
      <div className="sbar lt" style={{ background: 'var(--navy)' }}>
        <span></span>
        <span>9:41</span>
        <span></span>
      </div>

      {/* Hero Section */}
      <div className="home-hero">
        <div className="logo-badge">🎄</div>
        <div className="home-tagline">Canton Township, Michigan</div>
        <div className="home-title">
          No Child Without<br />
          <span>a Christmas</span>
        </div>
        <div className="home-year">2025 Program — Est. 1940s</div>
      </div>

      {/* Stats */}
      <div className="stat-strip">
        <div className="stat-cell">
          <div className="stat-num">111</div>
          <div className="stat-lbl">Families</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">284</div>
          <div className="stat-lbl">Children</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">284</div>
          <div className="stat-lbl">Sponsored</div>
        </div>
      </div>

      {/* Portal Cards */}
      <div className="portals">
        <div className="portals-heading">How can we help you?</div>

        <div
          className={`portal-card ${!isAppOpen ? 'disabled' : ''}`}
          onClick={handleApply}
        >
          <div className="portal-icon">👨‍👩‍👧‍👦</div>
          <div className="portal-text">
            <h3>Apply for Assistance</h3>
            <p id="apply-portal-sub">
              {isAppOpen
                ? `Closes Nov 15. ${daysLeft} days left.`
                : 'Applications closed. Opens Oct 1.'}
            </p>
          </div>
          <div className="portal-arrow">{isAppOpen ? '›' : '🔒'}</div>
        </div>

        <div
          className="portal-card"
          onClick={() => navigate('/admin')}
        >
          <div className="portal-icon">⚙️</div>
          <div className="portal-text">
            <h3>Admin Dashboard</h3>
            <p>Review applications, manage approvals & run reports</p>
          </div>
          <div className="portal-arrow">›</div>
        </div>

        <div
          className="portal-card"
          onClick={() => navigate('/sponsor')}
        >
          <div className="portal-icon">⭐</div>
          <div className="portal-text">
            <h3>Sponsor a Child</h3>
            <p>Choose a child and make their Christmas special</p>
          </div>
          <div className="portal-arrow">›</div>
        </div>

        <div
          className="portal-card"
          onClick={() => navigate('/about')}
        >
          <div className="portal-icon">ℹ️</div>
          <div className="portal-text">
            <h3>About Goodfellows</h3>
            <p>Our mission, history, board, and how the program works</p>
          </div>
          <div className="portal-arrow">›</div>
        </div>

        <div
          className="portal-card"
          onClick={() => navigate('/involved')}
        >
          <div className="portal-icon">❤️</div>
          <div className="portal-text">
            <h3>Donate & Get Involved</h3>
            <p>Sponsor a child, volunteer, donate, or shop with Kroger</p>
          </div>
          <div className="portal-arrow">›</div>
        </div>

        <div
          className="portal-card"
          onClick={() => navigate('/status-check')}
        >
          <div className="portal-icon">🔍</div>
          <div className="portal-text">
            <h3>Check My Application</h3>
            <p>Already applied? Look up your current status here</p>
          </div>
          <div className="portal-arrow">›</div>
        </div>
      </div>

      {/* Footer */}
      <div className="home-footer">
        <div className="hf-text">
          <strong>Questions?</strong> Call 734-664-1044 or email cantongoodfellows@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Home;

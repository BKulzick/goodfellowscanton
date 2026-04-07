import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock sponsor data
const MOCK_CHILDREN = [
  { id: '1', name: 'Maya', age: 8, gender: 'Female', interests: 'Art, LEGO, Science' },
  { id: '2', name: 'Jamal', age: 10, gender: 'Male', interests: 'Sports, Video Games, Board Games' },
  { id: '3', name: 'Sofia', age: 6, gender: 'Female', interests: 'Reading, Coloring, Dolls' },
  { id: '4', name: 'Ethan', age: 12, gender: 'Male', interests: 'Basketball, Tech, Gaming' },
  { id: '5', name: 'Amara', age: 9, gender: 'Female', interests: 'Music, Dance, Sports' },
];

export const SponsorSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedChild, setSelectedChild] = useState<(typeof MOCK_CHILDREN)[0] | null>(null);
  const [sortBy, setSortBy] = useState('age');

  const sorted = [...MOCK_CHILDREN].sort((a, b) => {
    if (sortBy === 'age') return a.age - b.age;
    return a.name.localeCompare(b.name);
  });

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

      {selectedChild ? (
        <>
          <div className="hero">
            <h2>{selectedChild.name}'s Profile</h2>
            <p>Let's make their Christmas special</p>
          </div>

          <div className="fb">
            <div
              style={{
                background: 'white',
                border: '1.5px solid var(--border)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                {selectedChild.gender === 'Female' ? '👧' : '👦'}
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>
                {selectedChild.name}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '12px' }}>
                Age {selectedChild.age}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.6 }}>
                <strong>Interests:</strong> {selectedChild.interests}
              </div>
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
                💡 Suggested Gift Ideas
              </div>
              <ul style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Items related to their interests</li>
                <li>Age-appropriate games or puzzles</li>
                <li>Gift cards to stores they like</li>
                <li>Practical items (clothing, shoes)</li>
              </ul>
            </div>

            <button
              className="btn-primary"
              onClick={() => navigate('/sponsor')}
              style={{ marginBottom: '8px' }}
            >
              Sponsor {selectedChild.name}
            </button>
            <button
              className="btn-secondary"
              onClick={() => setSelectedChild(null)}
            >
              View Other Children
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="hero">
            <h2>Sponsor a Child</h2>
            <p>Choose a child and make their Christmas special</p>
          </div>

          {/* Sort */}
          <div style={{ padding: '14px 16px', background: 'white', borderBottom: '1px solid var(--border)' }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1.5px solid var(--border)',
                borderRadius: '8px',
                fontSize: '12px',
                background: 'white',
              }}
            >
              <option value="age">Sort by Age</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>

          {/* Children Grid */}
          <div style={{ padding: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {sorted.map((child) => (
              <div
                key={child.id}
                onClick={() => setSelectedChild(child)}
                style={{
                  background: 'white',
                  border: '1.5px solid var(--border)',
                  borderRadius: '12px',
                  padding: '14px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>
                  {child.gender === 'Female' ? '👧' : '👦'}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>
                  {child.name}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  Age {child.age}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SponsorSection;

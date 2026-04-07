import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import './ApplicationForm.css';

export const ApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const { currentApplication, setCurrentApplication } = useAppContext();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    // TODO: Submit to Firebase
    navigate('/application-submitted');
  };

  const handleInputChange = (field: string, value: any) => {
    setCurrentApplication({
      ...currentApplication,
      [field]: value,
    });
  };

  return (
    <div className="scr on">
      {/* Status Bar */}
      <div className="sbar lt" style={{ background: 'var(--navy)' }}>
        <span></span>
        <span>9:41</span>
        <span></span>
      </div>

      {/* Back Button */}
      <button className="back" onClick={() => navigate('/')}>
        ‹
      </button>

      {/* Hero */}
      <div className="hero">
        <h2>Application for Assistance</h2>
        <p>2025 Program</p>
      </div>

      {/* Progress */}
      <div className="prog-wrap">
        <div className="prog-meta">
          <span className="sn">Step {step} of 5</span>
          <span className="sc">{Math.round((step / 5) * 100)}%</span>
        </div>
        <div className="prog-track">
          <div
            className="prog-fill"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
        <div className="dots">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`dot ${i < step ? 'done' : i === step ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="fb">
        {step === 1 && <Step1 data={currentApplication} onChange={handleInputChange} />}
        {step === 2 && <Step2 data={currentApplication} onChange={handleInputChange} />}
        {step === 3 && <Step3 data={currentApplication} onChange={handleInputChange} />}
        {step === 4 && <Step4 data={currentApplication} onChange={handleInputChange} />}
        {step === 5 && <Step5 data={currentApplication} onChange={handleInputChange} />}
      </div>

      {/* Buttons */}
      <div style={{ padding: '0 16px 32px' }}>
        <button
          className="btn-secondary"
          onClick={handleBack}
          style={{ display: step === 1 ? 'none' : 'block' }}
        >
          ‹ Back
        </button>
        <button
          className="btn-primary"
          onClick={step === 5 ? handleSubmit : handleNext}
        >
          {step === 5 ? 'Submit Application' : 'Next ›'}
        </button>
      </div>
    </div>
  );
};

// Step 1: Family Information
const Step1: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({
  data,
  onChange,
}) => {
  return (
    <>
      <label className="flabel">Family Name</label>
      <input
        className="finput"
        type="text"
        placeholder="Last name, First name"
        value={data?.familyName || ''}
        onChange={(e) => onChange('familyName', e.target.value)}
      />

      <label className="flabel" style={{ marginTop: '14px' }}>
        Email Address
      </label>
      <input
        className="finput"
        type="email"
        placeholder="your@email.com"
        value={data?.email || ''}
        onChange={(e) => onChange('email', e.target.value)}
      />

      <label className="flabel" style={{ marginTop: '14px' }}>
        Phone Number
      </label>
      <input
        className="finput"
        type="tel"
        placeholder="(555) 123-4567"
        value={data?.phone || ''}
        onChange={(e) => onChange('phone', e.target.value)}
      />

      <label className="flabel" style={{ marginTop: '14px' }}>
        Number of Children
      </label>
      <input
        className="finput"
        type="number"
        placeholder="1"
        value={data?.childrenCount || ''}
        onChange={(e) => onChange('childrenCount', parseInt(e.target.value))}
      />
    </>
  );
};

// Step 2: Children Information
const Step2: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({
  data,
  onChange,
}) => {
  return (
    <>
      <div className="fgroup">
        <label className="flabel">Children Details</label>
        <p style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '14px' }}>
          Please enter information for each child you're applying for assistance for.
        </p>
      </div>

      {[0, 1, 2].map((idx) => (
        <div key={idx} style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>
            Child {idx + 1}
          </div>

          <div className="frow">
            <div>
              <label className="flabel">Name</label>
              <input className="finput" type="text" placeholder="First name" />
            </div>
            <div>
              <label className="flabel">Age</label>
              <input className="finput" type="number" placeholder="10" />
            </div>
          </div>

          <label className="flabel" style={{ marginTop: '10px' }}>
            Gender
          </label>
          <select className="finput">
            <option>Select...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      ))}
    </>
  );
};

// Step 3: Wish List
const Step3: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = () => {
  return (
    <>
      <label className="flabel">Wish List Items</label>
      <p style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '14px' }}>
        Please tell us what gifts each child would like to receive. This helps our sponsors choose the perfect present.
      </p>

      {[0, 1, 2].map((idx) => (
        <div key={idx} style={{ marginBottom: '16px' }}>
          <label className="flabel">Child {idx + 1} Wish List</label>
          <textarea
            className="finput"
            placeholder="E.g., LEGO set, art supplies, sports equipment..."
            style={{ minHeight: '80px', fontFamily: "'Open Sans', sans-serif" }}
          />
        </div>
      ))}
    </>
  );
};

// Step 4: Documentation
const Step4: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = () => {
  return (
    <>
      <label className="flabel">Upload Documents</label>
      <p style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '14px' }}>
        To help us process your application, please upload documentation that shows household need.
      </p>

      {['Income Verification', 'Proof of Residency', 'Custody Documentation'].map((doc) => (
        <div key={doc} className="fgroup">
          <label className="flabel">{doc}</label>
          <div
            style={{
              border: '2px dashed var(--border)',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📄</div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>
              Tap to select file
            </div>
            <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>
              PDF, JPG, or PNG
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// Step 5: Review & Submit
const Step5: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({
  data,
}) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <label className="flabel">Review Your Application</label>
      <p style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '14px' }}>
        Please review the information below. If everything looks correct, check the box and submit.
      </p>

      <div
        style={{
          background: 'white',
          border: '1.5px solid var(--border)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '16px',
        }}
      >
        <div style={{ fontSize: '12px', marginBottom: '12px' }}>
          <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>
            Family Name
          </div>
          <div style={{ color: 'var(--text)' }}>{data?.familyName || 'N/A'}</div>
        </div>

        <div style={{ fontSize: '12px', marginBottom: '12px' }}>
          <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>
            Contact Email
          </div>
          <div style={{ color: 'var(--text)' }}>{data?.email || 'N/A'}</div>
        </div>

        <div style={{ fontSize: '12px', marginBottom: '12px' }}>
          <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>
            Phone
          </div>
          <div style={{ color: 'var(--text)' }}>{data?.phone || 'N/A'}</div>
        </div>

        <div style={{ fontSize: '12px' }}>
          <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>
            Number of Children
          </div>
          <div style={{ color: 'var(--text)' }}>{data?.childrenCount || 'N/A'}</div>
        </div>
      </div>

      <label
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '12px',
          background: '#f9fafb',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          style={{ marginTop: '4px', cursor: 'pointer', width: '18px', height: '18px' }}
        />
        <div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>
            I confirm this information is accurate
          </div>
          <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>
            By submitting, I attest that all information provided is true and complete.
          </div>
        </div>
      </label>
    </>
  );
};

export default ApplicationForm;

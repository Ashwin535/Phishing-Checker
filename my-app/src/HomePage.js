import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import './App.css';
import logo from './images.png';


function HomePage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheck = async () => {
    if (!url) return;

    setLoading(true);
    try {
      const resultRes = await axios.post('http://localhost:5000/api/check-url', { url });
      const accuracyRes = await axios.get('http://localhost:5000/api/compare-accuracy');

      navigate('/result', {
        state: {
          verdict: resultRes.data.verdict,
          accuracy: resultRes.data.accuracy,
          comparisonData: accuracyRes.data,
        },
      });
    } catch (err) {
      alert('Failed to check the URL.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="overlay">
        <div className="container">
          <h1 className="title">URL Phishing Detection</h1>
          <img src={logo} alt="Logo" className="logo" />


          <div className="input-container">
            <input
              type="text"
              placeholder="Enter a URL..."
              className="input"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              className="button"
              onClick={handleCheck}
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Check URL'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

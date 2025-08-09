// ResultPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';
import Footer from './Footer'; 


function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state;

  if (!result) {
    return (
      <div className="container">
        <p>No result found. Please go back and check a URL.</p>
        <button onClick={() => navigate('/')} className="button">Go Back</button>
      </div>
    );
  }

  const chartData = {
    labels: result.comparisonData.map((item) => item.name),
    datasets: [
      {
        label: 'Accuracy',
        data: result.comparisonData.map((item) => item.accuracy * 100),
        backgroundColor: 'rgba(112, 238, 8, 0.6)',
      },
    ],
  };

  return (
   <div className="page-wrapper">
    <div className="overlay">
      <div className="container">
        <h1 className="title">Detection Result</h1>

        <div className="result-box">
          <p className="verdict">
            Verdict:{" "}
            <span className={result.verdict === 'phishing' ? 'phishing' : 'legit'}>
              {result.verdict.toUpperCase()}
            </span>
          </p>
          <p>Model Accuracy: {(result.accuracy * 100).toFixed(2)}%</p>
        </div>

        <div className="chart-box">
          <h2 className="title">Accuracy Comparison</h2>
          <Bar data={chartData} />
        </div>

        <button onClick={() => navigate('/')} className="button mt-4">Check Another URL</button>
      </div>
    </div>
    <Footer />
   </div>
  );
}

export default ResultPage;

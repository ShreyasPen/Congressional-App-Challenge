import React from 'react';

function Analytics() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', color: '#4a4aef' }}>Posture Analytics</h2>
      <p style={{ marginBottom: '30px', color: '#555' }}>
        Track your posture improvements over time with intuitive visualizations and insights.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#f0f0f0', width: '300px', height: '200px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
          [Chart: Daily Posture Score]
        </div>
        <div style={{ backgroundColor: '#f0f0f0', width: '300px', height: '200px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
          [Chart: Weekly Improvement Trend]
        </div>
      </div>
    </div>
  );
}

export default Analytics;

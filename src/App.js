import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import AssessmentSection from './Assessment';

function App() {
  return (
    <div className="app-container">
    <Sidebar/>
    <AssessmentSection/>
    </div>
  );
}

export default App;

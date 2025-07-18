import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import ConsultingHomepage from './components/ConsultingHomepage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<ConsultingHomepage />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
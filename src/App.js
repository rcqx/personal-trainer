import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ExercisePlans from './pages/ExercisePlans';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/exercise-plans' element={<ExercisePlans />} />
      </Routes>
    </div>
  );
}

export default App;

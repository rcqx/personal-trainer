import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LandingNav from './components/LandingNav';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/profilePage';
import ExercisePlans from './pages/ExercisePlans';
import Footer from './components/Footer';

function App() {
  const user = true;

  return (
    <div className="App">
      {user ? (
        <Nav />
      ) : (
        <LandingNav />
      )}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/exercise-plans' element={<ExercisePlans />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

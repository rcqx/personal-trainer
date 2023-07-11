import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LandingNav from './components/LandingNav';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/profilePage';
import ExercisePlans from './pages/ExercisePlans';
import MealPlans from './pages/MealPlans';
import NotFound from './components/notFound/notFound';
import Footer from './components/footer';

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
        <Route path='/meal-plans' element={<MealPlans />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import LandingNav from './components/landingNav';
import LandingPage from './pages/landingPage';
import ProfilePage from './pages/profilePage';
import ExercisePlans from './pages/exercisePlans';
import MealPlans from './pages/mealPlans';
import Workout from './components/workout/workout';
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
        <Route path='/workout' element={<Workout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

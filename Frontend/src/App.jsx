import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Home/Home';
import Courses from '../src/Courses/Courses';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Courses" element={<Courses />} />
    </Routes>
  );
}

export default App;

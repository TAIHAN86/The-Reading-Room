import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Home/Home';
import Courses from '../src/Courses/Courses';

function App() {
  return (
    <div className='"dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Course" element={<Courses />} />
    </Routes>
    </div>
  );
}

export default App;

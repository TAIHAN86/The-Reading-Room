// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Home/Home';
import Courses from '../src/Courses/Courses';
import Skeleton from './components/skeleton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay in loading the content
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route
          path="/"
          element={loading ? <Skeleton /> : <Home />}
        />
        <Route
          path="/Course"
          element={loading ? <Skeleton /> : <Courses />}
        />
      </Routes>
    </div>
  );
}

export default App;

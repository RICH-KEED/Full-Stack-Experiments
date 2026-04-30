import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  const [jobs, setJobs] = useState([]);
  const [activeNav, setActiveNav] = useState('Home');
  const [locationFilters, setLocationFilters] = useState({
    remote: false,
    onsite: false,
    hybrid: false,
  });
  const [salaryFilter, setSalaryFilter] = useState('');

  function handleAddJob(job) {
    setJobs((prev) => [...prev, job]);
  }

  function handleDeleteJob(index) {
    setJobs((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Header is always visible, outside Routes */}
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Routed pages */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              jobs={jobs}
              onAddJob={handleAddJob}
              onDeleteJob={handleDeleteJob}
              locationFilters={locationFilters}
              setLocationFilters={setLocationFilters}
              salaryFilter={salaryFilter}
              setSalaryFilter={setSalaryFilter}
            />
          }
        />
      </Routes>

      {/* Footer is always visible, outside Routes */}
      <Footer />
    </div>
  );
}

export default App;

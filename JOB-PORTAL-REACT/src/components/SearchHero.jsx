import { useState } from 'react';

function SearchHero() {
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('New York');
  const [skillsError, setSkillsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!skills.trim()) {
      setSkillsError(true);
      setTimeout(() => setSkillsError(false), 2000);
      alert('Please enter skills, titles, or companies to search!');
      return;
    }
    // Search action placeholder
    console.log('Searching:', { skills, experience, location });
  }

  return (
    <section
      className="max-w-6xl mx-auto my-12 p-12 text-center rounded-2xl border"
      style={{
        background: 'radial-gradient(circle at top left, rgba(16,185,129,0.05), transparent), var(--surface)',
        borderColor: 'var(--surface-border)',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1)',
      }}
    >
      <h2
        className="font-extrabold mb-2"
        style={{ fontSize: '2.5rem', letterSpacing: '-0.05em', color: 'var(--text-main)' }}
      >
        Find your next step
      </h2>
      <p className="text-lg mb-10" style={{ color: 'var(--text-muted)' }}>
        Thousands of opportunities waiting for you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex gap-4 flex-wrap justify-center items-end rounded-xl border p-3"
        style={{ background: '#00000040', borderColor: 'var(--surface-border)' }}
      >
        {/* Skills */}
        <div className="flex-1 text-left" style={{ minWidth: '200px' }}>
          <label
            className="block text-xs font-semibold uppercase mb-2 ml-1"
            style={{ letterSpacing: '0.05em', color: 'var(--text-muted)' }}
          >
            What (Skills, Titles, Companies):
          </label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g. Designer"
            style={{
              borderColor: skillsError ? '#ef4444' : undefined,
            }}
          />
        </div>

        {/* Experience */}
        <div className="flex-1 text-left" style={{ minWidth: '200px' }}>
          <label
            className="block text-xs font-semibold uppercase mb-2 ml-1"
            style={{ letterSpacing: '0.05em', color: 'var(--text-muted)' }}
          >
            Experience:
          </label>
          <select value={experience} onChange={(e) => setExperience(e.target.value)}>
            <option value="">Any exp.</option>
            <option value="entry">Entry (0-2y)</option>
            <option value="mid">Mid (3-5y)</option>
            <option value="senior">Senior (5y+)</option>
          </select>
        </div>

        {/* Location */}
        <div className="flex-1 text-left" style={{ minWidth: '200px' }}>
          <label
            className="block text-xs font-semibold uppercase mb-2 ml-1"
            style={{ letterSpacing: '0.05em', color: 'var(--text-muted)' }}
          >
            Where (City):
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. New York"
          />
        </div>

        {/* Submit */}
        <div className="flex-1" style={{ minWidth: '140px' }}>
          <button
            type="submit"
            className="w-full font-semibold transition-all duration-200"
            style={{
              background: 'var(--primary)',
              color: 'var(--text-inverse)',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              height: '46px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-hover)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Search Jobs
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchHero;

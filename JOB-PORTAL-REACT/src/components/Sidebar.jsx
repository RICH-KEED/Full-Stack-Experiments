import { useState } from 'react';

function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="mb-4 rounded-xl overflow-hidden border"
      style={{ background: 'var(--surface)', borderColor: 'var(--surface-border)' }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex justify-between items-center p-4 font-semibold cursor-pointer select-none text-left"
        style={{ background: 'transparent', border: 'none', color: 'var(--text-main)' }}
      >
        <span>{title}</span>
        <span
          style={{
            color: 'var(--primary)',
            display: 'inline-block',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        >
          →
        </span>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

function Sidebar({ locationFilters, setLocationFilters, salaryFilter, setSalaryFilter }) {
  function handleLocationChange(key) {
    const updated = { ...locationFilters, [key]: !locationFilters[key] };
    setLocationFilters(updated);
    const selected = Object.keys(updated).filter((k) => updated[k]);
    console.log('Location filters:', selected);
  }

  function handleSalaryChange(value) {
    setSalaryFilter(value);
    console.log('Salary filter:', value);
  }

  return (
    <aside className="sticky top-36 h-fit">
      <h2
        className="text-xl font-bold mb-6 pb-3 border-b-2"
        style={{ borderColor: 'var(--surface-border)', color: 'var(--text-main)' }}
      >
        Filters
      </h2>

      <AccordionSection title="Location Filters">
        <ul className="list-none mt-3 space-y-3">
          {[
            { key: 'remote', label: 'Remote' },
            { key: 'onsite', label: 'On-site' },
            { key: 'hybrid', label: 'Hybrid' },
          ].map(({ key, label }) => (
            <li key={key}>
              <label
                className="flex items-center gap-3 cursor-pointer text-sm transition-colors duration-200"
                style={{ color: locationFilters[key] ? 'var(--text-main)' : 'var(--text-muted)' }}
              >
                <input
                  type="checkbox"
                  checked={locationFilters[key]}
                  onChange={() => handleLocationChange(key)}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </AccordionSection>

      <AccordionSection title="Salary Range">
        <ul className="list-none mt-3 space-y-3">
          {['$50k - $100k', '$100k - $150k', '$150k+'].map((range) => (
            <li key={range}>
              <label
                className="flex items-center gap-3 cursor-pointer text-sm transition-colors duration-200"
                style={{ color: salaryFilter === range ? 'var(--text-main)' : 'var(--text-muted)' }}
              >
                <input
                  type="radio"
                  name="salary"
                  value={range}
                  checked={salaryFilter === range}
                  onChange={() => handleSalaryChange(range)}
                />
                {range}
              </label>
            </li>
          ))}
        </ul>
      </AccordionSection>
    </aside>
  );
}

export default Sidebar;

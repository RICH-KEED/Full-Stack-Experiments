import { useState } from 'react';

function JobCard({ job, index, onDelete }) {
  const [applied, setApplied] = useState(false);

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=random`;

  function handleApply() {
    if (!applied) {
      setApplied(true);
    }
  }

  function handleDelete() {
    onDelete(index);
  }

  return (
    <article
      className="job-card-animate rounded-2xl border p-6 transition-all duration-300 relative overflow-hidden"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--surface-border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary)';
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
        e.currentTarget.style.background = 'var(--surface-hover)';
        e.currentTarget.style.boxShadow = '0 12px 24px -10px #10b98155';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--surface-border)';
        e.currentTarget.style.transform = '';
        e.currentTarget.style.background = 'var(--surface)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Card Header */}
      <header
        className="grid gap-5 mb-5"
        style={{
          gridTemplateColumns: 'auto 1fr',
          background: 'transparent',
          border: 'none',
          padding: 0,
          position: 'static',
          backdropFilter: 'none',
        }}
      >
        <img
          src={avatarUrl}
          alt={`${job.company} Logo`}
          width={56}
          height={56}
          className="rounded-xl object-contain bg-white p-1"
          style={{ width: '56px', height: '56px' }}
        />
        <div>
          <h3
            className="text-xl font-bold m-0"
            style={{ color: 'var(--text-main)', WebkitTextFillColor: 'initial' }}
          >
            {job.title}
          </h3>
          <p className="text-sm font-semibold mt-1" style={{ color: 'var(--primary)' }}>
            Company: {job.company}
          </p>
        </div>
      </header>

      {/* Meta Pills */}
      <ul className="list-none flex gap-3 flex-wrap mb-4">
        {[
          { label: 'Experience', value: job.experience },
          { label: 'Salary', value: job.salary },
          { label: 'Location', value: job.location },
          ...(job.tags ? [{ label: 'Tags', value: job.tags }] : []),
        ].map(({ label, value }) => (
          <li
            key={label}
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: '#27272a', color: 'var(--text-muted)' }}
          >
            <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>{label}:</strong>{' '}
            {value}
          </li>
        ))}
      </ul>

      {/* Description */}
      <p
        className="text-sm mb-6"
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.9375rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {job.description}
      </p>

      {/* Card Footer */}
      <footer
        className="pt-5 flex justify-end border-t"
        style={{ borderColor: 'var(--surface-border)', background: 'transparent', padding: '1.25rem 0 0', position: 'static', backdropFilter: 'none' }}
      >
        <button
          onClick={handleApply}
          disabled={applied}
          className="font-bold text-sm mr-3 transition-all duration-200"
          style={{
            background: applied ? '#059669' : 'var(--primary)',
            color: applied ? '#fff' : 'var(--text-inverse)',
            opacity: applied ? 0.7 : 1,
            padding: '0.5rem 1.2rem',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            cursor: applied ? 'not-allowed' : 'pointer',
            boxShadow: '0 2px 8px -2px #10b98133',
          }}
          onMouseEnter={(e) => {
            if (!applied) {
              e.currentTarget.style.background = 'var(--primary-hover)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
            }
          }}
          onMouseLeave={(e) => {
            if (!applied) {
              e.currentTarget.style.background = 'var(--primary)';
              e.currentTarget.style.transform = '';
            }
          }}
        >
          {applied ? 'Applied!' : 'Apply'}
        </button>

        <button
          onClick={handleDelete}
          className="font-bold text-sm transition-all duration-200"
          style={{
            background: '#ef4444',
            color: '#fff',
            padding: '0.5rem 1.2rem',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            boxShadow: '0 2px 8px -2px #ef444433',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#b91c1c';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ef4444';
            e.currentTarget.style.transform = '';
          }}
        >
          Delete
        </button>
      </footer>
    </article>
  );
}

export default JobCard;

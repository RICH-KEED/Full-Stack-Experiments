import { useState } from 'react';

const INITIAL_FORM = {
  title: '',
  company: '',
  experience: '',
  salary: '',
  location: '',
  tags: '',
  description: '',
};

function FormField({ label, id, children }) {
  return (
    <div className="flex flex-col gap-1" style={{ minWidth: '180px', flex: '1 1 180px' }}>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase"
        style={{ letterSpacing: '0.05em', color: 'var(--text-muted)' }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function AddJobForm({ onAddJob }) {
  const [form, setForm] = useState(INITIAL_FORM);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, company, experience, salary, location, description } = form;
    if (!title || !company || !experience || !salary || !location || !description) {
      alert('Please fill in all required fields.');
      return;
    }
    onAddJob({ ...form });
    setForm(INITIAL_FORM);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 flex flex-wrap gap-4 items-end rounded-2xl border p-6"
      style={{ background: 'var(--surface)', borderColor: 'var(--surface-border)' }}
    >
      <FormField label="Job Title *" id="job-title">
        <input
          type="text"
          id="job-title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="e.g. Frontend Developer"
          required
        />
      </FormField>

      <FormField label="Company *" id="company">
        <input
          type="text"
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="e.g. Google"
          required
        />
      </FormField>

      <FormField label="Experience *" id="job-experience">
        <input
          type="text"
          id="job-experience"
          name="experience"
          value={form.experience}
          onChange={handleChange}
          placeholder="e.g. 2+ years"
          required
        />
      </FormField>

      <FormField label="Salary *" id="salary">
        <input
          type="text"
          id="salary"
          name="salary"
          value={form.salary}
          onChange={handleChange}
          placeholder="e.g. $100k - $150k"
          required
        />
      </FormField>

      <FormField label="Location *" id="job-location">
        <input
          type="text"
          id="job-location"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="e.g. Remote"
          required
        />
      </FormField>

      <FormField label="Tags" id="tags">
        <input
          type="text"
          id="tags"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="e.g. React, Node.js"
        />
      </FormField>

      {/* Full-width row break */}
      <div style={{ flexBasis: '100%', height: 0 }} />

      <FormField label="Description *" id="description">
        <input
          type="text"
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short job description"
          required
        />
      </FormField>

      <div className="flex items-end">
        <button
          type="submit"
          className="font-semibold transition-all duration-200"
          style={{
            background: 'var(--primary)',
            color: 'var(--text-inverse)',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            height: '46px',
            whiteSpace: 'nowrap',
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
          Add Job
        </button>
      </div>
    </form>
  );
}

export default AddJobForm;

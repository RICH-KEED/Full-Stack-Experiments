import JobCard from './JobCard';
import AddJobForm from './AddJobForm';

function JobList({ jobs, onAddJob, onDeleteJob }) {
  return (
    <section className="flex flex-col gap-6">
      {/* Heading with job count */}
      <h2
        className="text-2xl font-bold flex items-center gap-3"
        style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}
      >
        Featured Jobs ({jobs.length})
        <span
          className="flex-1"
          style={{ height: '1px', background: 'var(--surface-border)' }}
        />
      </h2>

      {/* Add Job Form */}
      <AddJobForm onAddJob={onAddJob} />

      {/* Job Cards */}
      {jobs.length === 0 ? (
        <p className="text-center py-12" style={{ color: 'var(--text-muted)' }}>
          No jobs yet. Add one above!
        </p>
      ) : (
        jobs.map((job, idx) => (
          <JobCard key={idx} job={job} index={idx} onDelete={onDeleteJob} />
        ))
      )}
    </section>
  );
}

export default JobList;

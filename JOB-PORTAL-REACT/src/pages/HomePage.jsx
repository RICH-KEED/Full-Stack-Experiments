import SearchHero from '../components/SearchHero';
import Sidebar from '../components/Sidebar';
import JobList from '../components/JobList';

function HomePage({
  jobs,
  onAddJob,
  onDeleteJob,
  locationFilters,
  setLocationFilters,
  salaryFilter,
  setSalaryFilter,
}) {
  return (
    <>
      <SearchHero />

      <main
        className="main-grid mx-auto mb-20 px-6"
        style={{ maxWidth: '1200px' }}
      >
        <Sidebar
          locationFilters={locationFilters}
          setLocationFilters={setLocationFilters}
          salaryFilter={salaryFilter}
          setSalaryFilter={setSalaryFilter}
        />

        <JobList
          jobs={jobs}
          onAddJob={onAddJob}
          onDeleteJob={onDeleteJob}
        />
      </main>
    </>
  );
}

export default HomePage;

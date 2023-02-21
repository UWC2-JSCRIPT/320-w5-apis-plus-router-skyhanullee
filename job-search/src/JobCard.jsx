import PropTypes from 'prop-types';

function JobCard({ job }) {
  const { title, location, company, salary_min, created } = job
  const dateCreated = new Date(created).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  const salary = salary_min.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className='job-card'>
      <h2 className='job-title'>{title}</h2>
      <div className='job-details'>
        <h3>Location:</h3>
        <p>{location.display_name}</p>
        <h3>Company:</h3>
        <p>{company.display_name}</p>
        <h3>Estimated Salary:</h3>
        <p>{salary}</p>
        <h3>Date Created: </h3>
        <p>{dateCreated}</p>
      </div>
    </div>
  )
}

JobCard.propTypes = {
  job: PropTypes.arrayOf(
    PropTypes.shape({
      salary_min: PropTypes.number,
      location: PropTypes.shape({
        display_name: PropTypes.string,
      }),
      description: PropTypes.string,
      title: PropTypes.string,
      company: PropTypes.shape({
        display_name: PropTypes.string
      }),
      created: PropTypes.string,
      id: PropTypes.string,
    })
    ),
  }
  
  export default JobCard

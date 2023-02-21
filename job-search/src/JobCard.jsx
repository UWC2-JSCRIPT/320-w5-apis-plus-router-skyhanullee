function JobCard({ job }) {
  const { title, location, company, created, salary_min } = job
  const dateCreated = new Date(created).toLocaleDateString("en-US", { year:"numeric", month:"short", day:"numeric"});
  const salary = salary_min.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  
  return (
    <div className="job-card">
      <h2>{title}</h2>
      <h4>Location: </h4>
      <p>{location.display_name}</p>
      <h4>Company: </h4>
      <p>{company.display_name}</p>
      <h4>Date Created: </h4>
      <p>{dateCreated}</p>
      <h4>Salary: </h4>
      <p>{salary}</p>
    </div>
  )
}
export default JobCard
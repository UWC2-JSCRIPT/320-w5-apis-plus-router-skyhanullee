import { Link, useLocation, useParams } from 'react-router-dom';

function JobPage() {
  const { jobId } = useParams();
  const dataLocation = useLocation();
  const jobObject = dataLocation.state?.data;
  const { title, location, company, created, salary_min } = jobObject.job
  const dateCreated = new Date(created).toLocaleDateString("en-US", { year:"numeric", month:"short", day:"numeric"});
  const salary = salary_min.toLocaleString('en-US', { type: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  console.log(jobObject.job);
  return (
    <div>
      {/* <Link to="/">Home</Link> */}
      <h1>Job Title: {title}</h1>
      <h2>Location: {location.display_name}</h2>
      <h2>Company: {company.display_name}</h2>
      <h2>Date Created: {dateCreated}</h2>
      <h2>Salary: {salary}</h2>
      <a href={`https://adzuna.com/details/${jobId}`}><h2>Adzuna Ad Link: {jobId}</h2></a>
    </div>
  )
}
export default JobPage
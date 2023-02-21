import './App.css';
import { Route, Routes, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import JobForm from './JobForm';
import jsonData from './data_3.json';
import JobCard from './JobCard';
import JobPage from './JobPage';
import Navbar from './Navbar';
import HomePage from './HomePage';

function App() {

  // const [jobId, setJobId] = useState();
  // const [jobObject, setJobObject] = useState();

  // const [searchTerms, setSearchTerms] = useState('react');
  // const [location, setLocation] = useState('seattle');
  // const [resultsPerPage, setResultsPerPage] = useState(1);

  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  //   setSearchTerms(event.target[0].value);
  //   setLocation(event.target[1].value);
  //   setResultsPerPage(event.target[2].value);
    
  //   // setSearchTerms('javascript');
  //   // setLocation('seattle');
  //   // setResultsPerPage(3);

  //   console.log('on form submit called');
  // }

  // const [jobResult, setJobResult] = useState(undefined);
  // const [loading, toggleLoading] = useState(true);
  // const [hasError, setHasError] = useState(false);

  // const navigate = useNavigate();


  // const API_ID = process.env.REACT_APP_ID;
  // const API_KEY = process.env.REACT_APP_KEY;


  // // useEffect(() => {
  // //   fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=${resultsPerPage}&what=${searchTerms}&where=${location}`)
  // //   // fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=15ced00f&app_key=41070de76e674338673d84863fadc232&results_per_page=1&what=javascript&where=seattle`)
  // //     .then(response => response.json())
  // //     .then(
  // //       (data) => {
  // //         // console.log(data);
  // //         console.log(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=${resultsPerPage}&what=${searchTerms}&where=${location}`);
  // //         setJobResult(data);
  // //         toggleLoading(false);
  // //         // navigate('/about');
  // //     },
  // //     (error) => {
  // //       // console.log(error);
  // //       toggleLoading(false);
  // //       setHasError(true);
  // //     }
  // //   )
  // // }, [resultsPerPage, searchTerms, location, API_ID, API_KEY])

  // // if (loading) {
  // //   return <p>loading...</p>
  // // }

  // // if (hasError) {
  // //   return <p>Error</p>
  // // }

  // const Home = () => {
  //   const { search } = useLocation();
  //   // console.log(search);
    
  //   return (
  //     <div>
  //       <h1>Home</h1>
  //       <section className='job-app-container'>
  //       <JobForm
  //         // title={title}
  //         onFormSubmit={onFormSubmit}
  //         setSearchTerms={setSearchTerms}
  //         setLocation={setLocation}
  //         setResultsPerPage={setResultsPerPage}
  //       />
  //       <h1>Showing results for: {searchTerms}</h1>
  //       {jobResultList}
  //       {/* <JobResults 
  //         // jobResult={jobResult}
  //         jobResultList={jobResultList}
  //       /> */}
  //     </section>
  //     </div>
  //   );
  // };


  // const jobResultList = jsonData.results.map((job) => {
  // // const jobResultList = jobResult.results.map((job) => {
  //   // console.log(job);\
  //   // setJobObject(job);

  //   // setJobId(job.id);
  //   // console.log(job.id);
  //   return (
  //     <li key={job.id}>
  //       <Link to={`/job/${job.id}`} state={{ data: {job} }}>
  //         <JobCard
  //             job={job}
  //         />
  //       </Link>
  //     </li>
  //   )
  // });



  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/job/:jobId' element={<JobPage />}/>
    </Routes>

    </div>
  );
}

export default App;

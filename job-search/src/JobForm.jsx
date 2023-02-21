function JobForm({ onFormSubmit, searchTerms, location, resultsPerPage }) {

  
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="job-search">Search: </label>
        <input type="text" id='job-search-input' placeholder='Job, Company, Title' value={searchTerms}/>
        <label htmlFor="job-search">Location: </label>
        <input type="text" id='location-input' placeholder='City, State, Zip Code' value={location}/>
        <label htmlFor="job-search">Results per page: </label>
        <input type="number" id='results_per_page-input' min='1' defaultValue='1' value={resultsPerPage}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default JobForm
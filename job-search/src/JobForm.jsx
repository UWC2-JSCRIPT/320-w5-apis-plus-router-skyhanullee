import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

function JobForm({ onFormSubmit, searchTerms, location, resultsPerPage }) {


  return (
    <div className='job-form'>
      <form onSubmit={onFormSubmit}>
        <div id='form-search-terms'>
          <label htmlFor='job-search'>Search: </label>
          <input type='text' id='job-search-input' placeholder=' Job, Company, Title' value={searchTerms} />
        </div>
        <div id='form-location'>
          <label htmlFor='job-search'>Location: </label>
          <input type='text' id='location-input' placeholder=' City, State, Zip Code' value={location} />
        </div>
        <div id='form-results-per-page'>
          <label htmlFor='job-search'>Results per page: </label>
          <input type='number' id='results_per_page-input' min='1' defaultValue='4' value={resultsPerPage} />
        </div>
        <button type='submit'>
          <Icon icon='material-symbols:search-rounded' className='search-icon' />
        </button>
      </form>
    </div>
  )
}

JobForm.propTypes = {
  onFormSubmit: PropTypes.func,
  searchTerms: PropTypes.string,
  location: PropTypes.shape({
    display_name: PropTypes.string,
  }),
  resultsPerPage: PropTypes.number
  }
  
  export default JobForm

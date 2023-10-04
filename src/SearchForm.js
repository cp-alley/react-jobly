import React, { useState } from "react";
import "./SearchForm.css"

/** SearchForm: renders search bar
 *
 * Props:
 * -handleSearch
 *
 * State:
 * -formData
 *
 * CompanyList -> SearchForm
 * JobList -> SearchForm
 */
function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState("")


  function handleSubmit(evt){
    evt.preventDefault();
    handleSearch(formData);
  }


  function handleChange (evt) {
    const { value } = evt.target
    setFormData(curr => value)
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <label htmlFor="search-bar" className="SearchForm-label"></label>
      <input
      id="search-bar"
      name="searchTerm"
      className="SearchForm-input"
      onChange={handleChange}></input>
      <button type="submit" className="SearchForm-button">Search</button>
    </form>
  );
}

export default SearchForm;
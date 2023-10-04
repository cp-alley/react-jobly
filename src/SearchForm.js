import React, { useState } from "react";

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
    <form className="Search-Form" onSubmit={handleSubmit}>
      <label htmlFor="search-bar"></label>
      <input
      id="search-bar"
      name="searchTerm"
      onChange={handleChange}></input>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
import React, { useState } from "react";
import "./SearchForm.css";
import Alert from "./Alert";
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
  const [formData, setFormData] = useState("");
  const [alerts, setAlerts] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try{
      await handleSearch(formData);
    }catch(err){
      setAlerts(err.map(e => e.message));
    }
  }

  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(curr => value);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      {alerts && alerts.map((a, i) => <Alert key={i} message={a} />)}
      <label htmlFor="search-bar" className="SearchForm-label"></label>
      <input
        id="search-bar"
        name="searchTerm"
        value={formData}
        type="text"
        placeholder="Search for..."
        className="SearchForm-input"
        onChange={handleChange}></input>
      <button type="submit" className="SearchForm-button">Search</button>
    </form>
  );
}

export default SearchForm;
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
      setAlerts(err);
    }
  }

  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(curr => value);
  }

  function renderAlerts(alerts) {
    return (
      <div className="Alert-container">
        {alerts[0].message.map((a, i) =>
        <Alert key={i} message={a} />)}
      </div>
    );
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
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
      {alerts && renderAlerts(alerts)}
    </form>
  );
}

export default SearchForm;
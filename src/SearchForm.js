import React from "react";
import { useParams } from "react-router-dom";

function SearchForm({ handleSearch }) {
  //add state
  const { companies, jobs } = useParams();
  const url = companies === undefined ? jobs : companies;

//handleSubmit
  //handleSearch

//handleChange
  //updating local state

  return (
    <form className="Search-Form" onSubmit={handleSubmit}>
      <label htmlFor={`${url}-search`}></label>
      <input
      id={`${url}-search`}
      name="searchTerm"
      onChange={handleChange}></input>
      <button></button>
    </form>
  );
}

export default SearchForm;
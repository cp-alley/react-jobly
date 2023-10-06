import React, { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import Loading from "./Loading";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import "./CompanyList.css";
import userContext from "./userContext";

/**CompanyList:
 *
 * State:
 * -companies
 *
 * /companies -> CompanyList -> SearchForm, CompanyCard
 */
function CompanyList() {
  const [companies, setCompanies] = useState(null);
  //const [loadedCurrentUser, setLoadedCurrentUser] = useState(false);// put this in app
  const { currentUser, loadedCurrentUser } = useContext(userContext);

  useEffect(function () {
    console.log("useEffect in companyList. ", loadedCurrentUser, " =loadedCurrentUser in CompanyList")
    async function fetchCompanies() {
      let res = await JoblyApi.getCompanyList();
      setCompanies(curr => res);
    }
    fetchCompanies();

  }, [loadedCurrentUser]);

  async function handleSearch(searchTerm) {
    let res = await JoblyApi.getCompanyList(searchTerm);
    setCompanies(curr => res);
  }

  if (!companies) {
    return <Loading />;
  }

  if (!loadedCurrentUser) {
    return <Loading />;
  }
  // If we have loaded the current user, render as normal. If we have not loadedCurrentUser, render loading screen
  if(loadedCurrentUser === true){
    if (!currentUser) return <Navigate to="/" />;
  }


  return (
    <div className="CompanyList">
      <SearchForm handleSearch={handleSearch} />
      {companies.map(c => <CompanyCard key={c.handle} company={c} />)}
    </div>
  );
}

export default CompanyList;
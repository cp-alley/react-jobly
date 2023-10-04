import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import Loading from "./Loading";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import "./CompanyList.css"

/**CompanyList:
 *
 * State:
 * -listOfCompanies
 *
 * /companies -> CompanyList -> SearchForm, CompanyCard
 */
function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(function () {
    async function fetchCompanies() {
      let res = await JoblyApi.getCompanyList();
      setCompanies(curr => res);
    }
    fetchCompanies();
  }, []);

  async function handleSearch(searchTerm) {
    let res = await JoblyApi.getCompanyList(searchTerm);
    setCompanies(curr => res);
  }

  if (!companies) {
    return <Loading />;
  }

  return (
    <div className="CompanyList">
      <SearchForm handleSearch={handleSearch} />
      {companies.map(c => <CompanyCard key={c.handle} company={c} />)}
    </div>
  );

}

export default CompanyList;
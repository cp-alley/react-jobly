import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import Loading from "./Loading";
import JoblyApi from "./api";
import "./CompanyDetail.css"

/** CompanyDetail
 *
 * State:
 * -company
 *
 * /companies/:id -> CompanyDetail -> JobCardList
 */
function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const { handle } = useParams();

  useEffect(function () {
    async function fetchDetails() {
      let res = await JoblyApi.getCompany(handle);
      setCompany(curr => res);
    }
    fetchDetails();
  }, []);

  if (!company) {
    return <Loading />;
  }

  return (
    <div className="CompanyDetail">
      <header className="CompanyDetail-header">
        <h2>{company.name}</h2>
        <p>{company.description}</p>
      </header>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
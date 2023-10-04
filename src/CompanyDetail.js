import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import Loading from "./Loading";
import JoblyApi from "./api";

/** CompanyDetail
 *
 * State:
 * -companyDetails
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
    <>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </>
  );


}

export default CompanyDetail;
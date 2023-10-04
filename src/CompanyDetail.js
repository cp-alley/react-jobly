import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/** CompanyDetail
 *
 * State:
 * -companyDetails
 *
 * /companies/:id -> CompanyDetail -> JobCardList
 */
function CompanyDetail() {
  const [compDetails, setCompDetails] = useState(null);
  const { handle } = useParams();

  useEffect(function () {
    async function fetchDetails() {
      let res = await JoblyApi.getCompany(handle);
      setCompDetails(curr => res);
    }
    fetchDetails();
  }, []);



}

export default CompanyDetail;
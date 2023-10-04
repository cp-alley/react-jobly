import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import Loading from "./Loading";

/** Joblist
 *
 * State:
 * -listOfJobs
 *
 * /jobs -> JobList -> SearchForm, JobCardList
 */

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function () {
    async function fetchJobs() {
      let res = await JoblyApi.getJobList();
      setJobs(curr => res);
    }
    fetchJobs();
  }, []);

  async function handleSearch(searchTerm) {
    let res = await JoblyApi.getJobList(searchTerm);
    setJobs(curr => res);
  }

  if (!jobs) {
    return <Loading />;
  }

  return (
    <div>
    <SearchForm handleSearch={handleSearch} />
    <JobCardList jobs={jobs} />
  </div>
  );
}

export default JobList;
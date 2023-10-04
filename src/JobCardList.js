import React from "react";
import JobCard from "./JobCard";

/**JobCardList
 *
 * Props:
 * -jobs: [{id, title, salary, equity},...]
 *
 * CompanyDetail -> JobCardList
 */
function JobCardList({ jobs }) {
  return (
    <>
      {jobs.map(j => <JobCard key={j.id} job={j} />)}
    </>
  );
}

export default JobCardList;
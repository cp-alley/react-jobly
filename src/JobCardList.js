import React from "react";
import JobCard from "./JobCard";
import "./JobCardList.css"

/**JobCardList
 *
 * Props:
 * -jobs: [{id, title, salary, equity},...]
 *
 * CompanyDetail -> JobCardList
 */
function JobCardList({ jobs }) {
  return (
    <div className="JobCardList">
      {jobs.map(j => <JobCard key={j.id} job={j} />)}
    </div>
  );
}

export default JobCardList;
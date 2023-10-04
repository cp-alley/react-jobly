import React from "react";

function JobCard({job}) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  )
}

export default JobCard;
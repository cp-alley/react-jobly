import React from "react";

function JobCard({job}) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.salary}</p>
      <p>{job.equity}</p>
    </div>
  )
}

export default JobCard;
import React from "react";
import { Link } from "react-router-dom";

/** Render a company's details
 *
 *  Props: company like { handle, name, description, numEmployees, logoUrl }
 *
 *  CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div>
      <Link to={`/companies/${company.handle}`}>
      <h2>{company.name}</h2>
      </Link>
      <img src={`${company.logoUrl}`} alt={`Logo for ${company.name}`}></img>
      <p>{company.description}</p>
    </div>
  )
}

export default CompanyCard;
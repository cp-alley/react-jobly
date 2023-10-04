import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Render a company's details
 *
 *  Props: company like { handle, name, description, numEmployees, logoUrl }
 *
 *  CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${company.handle}`}>
        <h2 className="CompanyCard-heading">{company.name}</h2>
      </Link>
      {company.logoUrl &&
        <img
          src={`${company.logoUrl}`}
          alt={`Logo for ${company.name}`}>
        </img>}
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;
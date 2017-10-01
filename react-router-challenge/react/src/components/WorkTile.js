import React from 'react';

const WorkTile = ({ id, company, position, description, start_date, end_date }) => {
    let formattedStartDate = new Date(start_date).toDateString();
    let formattedEndDate = new Date(end_date).toDateString();
    return(
      <div className="work-tile">
        <h1>Company: {company}</h1>
        <h3>Position: {position}</h3>
        <h3>Description: {description}</h3>
        <h3>Time period: {formattedStartDate} - {formattedEndDate}</h3>
      </div>
    )
  }

export default WorkTile;

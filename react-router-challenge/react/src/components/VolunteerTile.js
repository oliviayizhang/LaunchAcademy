import React from 'react';

const VolunteerTile = ({ id, organization, position, cause, start_date, end_date }) => {
    let formattedStartDate = new Date(start_date).toDateString();
    let formattedEndDate = new Date(end_date).toDateString();
    return(
      <div className="volunteer-tile">
        <h1>Organization: {organization}</h1>
        <h3>Position: {position}</h3>
        <h3>Duties: {cause}</h3>
        <h3>Time period: {formattedStartDate} - {formattedEndDate}</h3>
      </div>
    )
  }

export default VolunteerTile;

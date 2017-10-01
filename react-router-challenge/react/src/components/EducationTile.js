import React from 'react';

const EducationTile = ({ id, institution, course_title, degree, start_date, end_date }) => {
  let formattedStartDate = new Date(start_date).toDateString();
  let formattedEndDate = new Date(end_date).toDateString();
    return(
      <div className="education-tile">
        <h1>{institution}</h1>
        <h3>Course Title (if applicable): {course_title}</h3>
        <h3>Degree (if applicable): {degree}</h3>
        <h3>Time period: {formattedStartDate}-{formattedEndDate}</h3>
      </div>
    )
  }

export default EducationTile;

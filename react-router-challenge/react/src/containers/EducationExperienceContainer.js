import React, { Component }  from 'react';
import EducationTile from '../components/EducationTile';

class EducationExperienceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education_experiences: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/education_experiences.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({education_experiences: responseData})
      })
  }

  render() {
    let education_experiences = this.state.education_experiences.map(education_experience => {
      return(
        <EducationTile
          key={education_experience.id}
          id={education_experience.id}
          institution={education_experience.institution}
          course_title={education_experience.course_title}
          degree={education_experience.degree}
          start_date={education_experience.start_date}
          end_date={education_experience.end_date}
        />
      )
    })
    return(
      <div className="education">
        <h1>Education</h1>
        {education_experiences}
        {this.props.children}
      </div>
    )
  }
}

export default EducationExperienceContainer;

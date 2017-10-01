import React, { Component }  from 'react';
import VolunteerTile from '../components/VolunteerTile';

class VolunteerExperienceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volunteer_experiences: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/volunteer_experiences.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({volunteer_experiences: responseData})
      })
  }

  render() {
    let volunteer_experiences = this.state.volunteer_experiences.map(volunteer_experience => {
      return(
        <VolunteerTile
          key={volunteer_experience.id}
          id={volunteer_experience.id}
          organization={volunteer_experience.organization}
          position={volunteer_experience.position}
          cause={volunteer_experience.cause}
          start_date={volunteer_experience.start_date}
          end_date={volunteer_experience.end_date}
        />
      )
    })
    return(
      <div className="volunteer_experiences">
        <h1>Volunteer Experience</h1>
        {volunteer_experiences}
        {this.props.children}
      </div>
    )
  }
}

export default VolunteerExperienceContainer;

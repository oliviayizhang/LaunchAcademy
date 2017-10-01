import React, { Component }  from 'react';
import WorkTile from '../components/WorkTile';

class WorkExperienceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work_experiences: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/work_experiences.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({work_experiences: responseData})
      })
  }

  render() {
    let work_experiences = this.state.work_experiences.map(work_experience => {
      return(
        <WorkTile
          key={work_experience.id}
          id={work_experience.id}
          company={work_experience.company}
          position={work_experience.position}
          description={work_experience.description}
          start_date={work_experience.start_date}
          end_date={work_experience.end_date}
        />
      )
    })
    return(
      <div className="work_experiences">
        <h1>Past Work</h1>
        {work_experiences}
        {this.props.children}
      </div>
    )
  }
}

export default WorkExperienceContainer;

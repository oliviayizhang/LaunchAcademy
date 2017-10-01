import React, { Component }  from 'react';
import ProjectTile from '../components/ProjectTile';

class ProjectsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/projects.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({projects: responseData})
      })
  }

  render() {
    let projects = this.state.projects.map(project => {
      return(
        <ProjectTile
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
        />
      )
    })
    return(
      <div>
        <h2 className="text-center"> My Projects </h2>
        {projects}
        {this.props.children}
      </div>
    )
  }
}

export default ProjectsIndexContainer;

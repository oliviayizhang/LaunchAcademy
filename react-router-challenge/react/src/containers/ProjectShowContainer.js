import React, { Component }  from 'react';
import ProjectShow from '../components/ProjectShow';

class ProjectShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    let projectId = this.props.params.id;
    fetch(`/api/v1/projects/${projectId}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({data: responseData})
      })
  }
  render() {
    return(
      <div>
        <ProjectShow
          key={this.state.data.id}
          id={this.state.data.id}
          name={this.state.data.name}
          description={this.state.data.description}
        />
      </div>
    )
  }
}

export default ProjectShowContainer;

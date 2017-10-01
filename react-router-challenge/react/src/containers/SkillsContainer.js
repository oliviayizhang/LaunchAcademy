import React, { Component }  from 'react';
import SkillTile from '../components/SkillTile';

class SkillsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/skills.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({skills: responseData})
      })
  }

  render() {
    let skills = this.state.skills.map(skill => {
      return(
        <SkillTile
          key={skill.id}
          id={skill.id}
          name={skill.name}
          proficiency={skill.proficiency}
        />
      )
    })
    return(
      <div className="skills">
        <h1>Skills</h1>
        {skills}
        {this.props.children}
      </div>
    )
  }
}

export default SkillsContainer;

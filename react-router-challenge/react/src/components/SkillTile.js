import React from 'react';

const SkillTile = ({ id, name, proficiency }) => {
    return(
      <div className="skill">
        <h1>{name}</h1>
        <h3>Proficiency: {proficiency}</h3>
      </div>
    )
  }

export default SkillTile;

import React from 'react'
import "./card.css"

const ProjectCard = ({title, thumbnail, description}) => {
  return (
    <div className="proC">
          <h1>{title}</h1>
          <img className='img' src={thumbnail} alt="" />
          <h4>{description}</h4>
    </div>
  )
}

export default ProjectCard
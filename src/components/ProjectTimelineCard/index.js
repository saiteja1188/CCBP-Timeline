import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails
  return (
    <>
      <div className="project-card-container">
        <img src={imageUrl} alt="project" className="project-img" />
        <div className="ProjectTitleAndDurationContainer">
          <h1 className="ProjectTitle">{projectTitle}</h1>
          <div className="DurationContainer">
            <AiFillCalendar color="#171f46" />
            <p className="Duration">{duration}</p>
          </div>
        </div>
        <p className="ProjectDescription">{description}</p>
        <a href={projectUrl} className="VisitLink">
          Visit
        </a>
      </div>
    </>
  )
}

export default ProjectTimelineCard

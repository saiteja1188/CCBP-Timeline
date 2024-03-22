// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1 className="heading">
            MY JOURNEY OF <br />
            <span className="span-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          item={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView

import React from 'react'
import SideProjects from './SideProjects'
import Experience from './Experience'

class Cards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <div className="Experience">
          <Experience />
        </div>
        <div className="side-projects">
          <SideProjects />
        </div>
      </div>
    )
  }
}

export default Cards

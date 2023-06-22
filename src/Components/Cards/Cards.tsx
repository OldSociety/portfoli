import React from 'react';
import SideProjects from './SideProjects';
import Experience from './Experience';

class Cards extends React.Component {
  render() {
    return (
      <div className="Cards">
          <Experience />
          <SideProjects />
      </div>
    );
  }
}

export default Cards;

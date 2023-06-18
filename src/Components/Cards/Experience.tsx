import React from 'react'

function Experience() {
  return (
    <div className="experience">
      <div className="card">
        <div className="exp">
          <a className="exp-title" href="https://smoothstack.com">
            DevOps Engineer - Smoothstack
          </a>
          <p>June 2022 - February 2023</p>
        </div>
        <p className="exp-description">
          {`Deployed and maintained full stack applications using DevOps best practices.`}
        </p>
        <p className="exp-tools">Docker • K8s • EC2 • EKS • Jenkins</p>
      </div>
      <div className="card">
        <div className="exp">
          <a className="exp-title" href="https://thinkful.com">
            Software Engineer - Thinkful Immersion Program
          </a>
          <p>October 2021 - April 2022</p>
        </div>
        <p className="exp-description">
          {`Learned industry best practices and full stack development standards and developed and deployed mobile-first applications.`}
        </p>
        <p className="exp-tools">React • TS • Python • MySQL • Express • API</p>
      </div>
      <div className="card">
        <div className="exp">
          <a className="exp-title" href="https://trimet.org/about/">
            Community Outreach Coordinator - Trimet
          </a>
          <p>April 2019 - January 2021</p>
        </div>
        <p className="exp-description">
          {`Negotiated with local businesses to provide bus passes for employees. Utilized public data to develop new marketing strategies.`}
        </p>
        <p className="exp-tools">Communication • Troubleshooting • Collaboration</p>
      </div>
    </div>
  )
}

export default Experience

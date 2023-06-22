import React from 'react';

function Experience() {
  return (
    <div className="experience-container">
      {/* <h5>—— Experience ——</h5> */}
      <a className="card" href="https://smoothstack.com">
        <div className="exp">
            DevOps Engineer - Smoothstack
          <p>June 2022 - February 2023</p>
        </div>
        <p className="exp-description">
          Deployed and maintained full stack applications using DevOps best practices.
        </p>
        <p className="exp-tools">Docker • K8s • EC2 • EKS • Jenkins</p>
      </a>
      <a className="card" href="https://thinkful.com">
        <div className="exp">
            Software Engineer - Thinkful Immersion Program
          <p>October 2021 - April 2022</p>
        </div>
        <p className="exp-description">
          Learned industry best practices and full stack development standards and developed and deployed mobile-first applications.
        </p>
        <p className="exp-tools">React • TS • Python • MySQL • Express • API</p>
      </a>
      <a className="card" href="https://trimet.org/about/">
        <div className="exp">
          <a className="exp-title" href="https://trimet.org/about/">
            Community Outreach Coordinator - Trimet
          </a>
          <p>April 2019 - January 2021</p>
        </div>
        <p className="exp-description">
          Negotiated with local businesses to provide bus passes for employees. Utilized public data to develop new marketing strategies.
        </p>
        <p className="exp-tools">Communication • Troubleshooting • Collaboration</p>
      </a>
    </div>
  );
}

export default Experience;

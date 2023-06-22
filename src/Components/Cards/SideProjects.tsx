import React from 'react';

function SideProjects() {
  return (
    <div className="side-projects">
      <h5>—— Side Projects ——</h5>
      <div className="card">
        <a href="https://github.com/OldSociety/character_architect">
          <img
            src="assets/images/preview-meridianlore.jpeg"
            className="card-img-top"
            alt="Meridian Lore website"
          />
        </a>
      </div>
      <div className="card">
        <a href="https://github.com/OldSociety/Thinkful_WeLoveMovies">
          <img
            src="\assets\images\welovemovies.jpg"
            className="card-img-top"
            alt="we love movies project"
          />
        </a>
      </div>
      <div className="card">
        <a href="https://github.com/OldSociety/Thinkful_Flashcard-o-matic">
          <img
            src="\assets\images\cardomatic.jpg"
            className="card-img-top"
            alt="flashcard-o-matic project"
          />
        </a>
      </div>
    </div>
  );
}

export default SideProjects;

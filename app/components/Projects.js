import React from 'react';

function Projects() {
  return (
    <div className="container my-5 text-center" id="project">
      <h1 className="display-4">Projects</h1>
      <p className="lead">Things I’ve built so far</p>
      <div className="row">
        <div className="col-md-6 mb-4">
          <a href="https://github.com/movinigamage/casual-work-web" className="text-decoration-none">
            <div className="card h-100">
              <img src='card--image.jpg' className="card-img-top" alt="Project Image" />
              <div className="card-body">
                <h5 className="card-title">CasualWork 2023</h5>
                <p className="card-text">Implemented a recruitment system that provides a platform for temporary workers- employee and manpower companies- employer.</p>
                <p className="card-text">Elevated user experience through user interfaces and data management, demonstrating proficiency in full-stack development.</p>
                <p className="card-text"><small className="text-muted">Technologies: React JS, Flutter, Firebase</small></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <img src='card--image.jpg' className="card-img-top" alt="Project Image" />
            <div className="card-body">
              <h5 className="card-title">HealthNeed 2022</h5>
              <p className="card-text">Worked in an agile team to develop a Hospital management system that allows hospitals to manage information and data related to healthcare processes.</p>
              <p className="card-text"><small className="text-muted">Technologies: Java servlets, Java server pages (JSPs), HTML, CSS, MySQL</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <img src='card--image.jpg' className="card-img-top" alt="Project Image" />
            <div className="card-body">
              <h5 className="card-title">E-Vote 2023</h5>
              <p className="card-text">Contributed to a Voting management system that followed distributed system architecture to ensure fault-tolerant operations.</p>
              <p className="card-text">My main contributions include implementing frontend development of the web application.</p>
              <p className="card-text"><small className="text-muted">Technologies: React JS, React Native, Node JS, MongoDB</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <img src='card--image.jpg' className="card-img-top" alt="Project Image" />
            <div className="card-body">
              <h5 className="card-title">Nova 2022</h5>
              <p className="card-text">IOT based plant monitoring smart pot. Develop a solution that uses real-time monitoring and automated controls to enhance plant care.</p>
              <p className="card-text">My main contributions include implementing frontend development of the mobile application.</p>
              <p className="card-text"><small className="text-muted">Technologies: C++, Flutter, Firebase</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

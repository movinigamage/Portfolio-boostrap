// About.js
import React from 'react';

function About() {
  return (
    <div className="container" id="about" style={{paddingTop:'100px', paddingBottom: '100px'}}>
      <h1 className="text-center fw-bold" style={{ fontSize: '2.5rem' }}>About</h1>
      <p className="fst-italic text-center" style={{ fontSize: '2.5rem' }}>
        <span className="gradient-text" style={{ fontWeight: 'bold' }}>An IT professional,</span> inspiring to utilize own capabilities to fulfill the
        organizational goals while enhancing personal competence.
      </p>
    </div>
  );
}

export default About;

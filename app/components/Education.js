// Education.js
import React from 'react';

function Education() {
  return (
    <div className="container my-5" id="education" style={{paddingTop:'100px', paddingBottom: '100px'}}>
      <h1 className="text-center fw-bold" style={{ fontSize: '2.5rem' }}>Education</h1>
      <div className="text-center" style={{ fontSize: '1.7rem' }}>
        <p className="gradient-text m-0 p-0">BSc (Hons) Software Engineering  2019-2022</p>
        <p className='fst-italic'>University of Plymouth, United Kingdom  Second Class Honours (Upper Division)</p>
        <p className="gradient-text m-0 p-0">GCE Advanced Level 2017</p>
        <p className='fst-italic'>H/Theraputte National School <br />Physical science stream</p>
      </div>
    </div>
  );
}

export default Education;

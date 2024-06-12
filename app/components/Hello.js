import React from 'react';
import Image from "next/image";

function Hello() {
  return (
    <div className="container my-5" style={{paddingTop:'50px', paddingBottom:'100px'}}>
      <div className="row align-items-center">
        <div className="col-md-6 text-left">
          <h1 className="display-4 font-weight-bold" style={{fontWeight:600}}>
            Hi <span role="img" aria-label="wave">👋</span>,<br />
            My name is<br />
            <span className='gradientText'>Movini Gamage</span><br />
            I build things for web
          </h1>
        </div>
        <div className="col-md-6 text-center">
            <img src='profile.png' alt="Profile" className={`img-fluid rounded-circle profileImage`} />
        </div>
      </div>
    </div>
  );
}

export default Hello;

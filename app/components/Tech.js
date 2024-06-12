import React from 'react';
// import img from "next/img";


function Tech() {
  return (
    <div className="container my-5" id="tech" style={{paddingTop:'100px', paddingBottom: '50px'}}>
      <div className="text-center">
        <h1 className="display-4" style={{fontWeight:600}}>My Tech Stack</h1>
        <p className="lead">Technologies I’ve been working with recently</p>
      </div>
      <div className="row text-center">
        <div className="col-6 col-md-3">
          <img src='vscode-icons_file-type-html.jpg' alt="HTML" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src='vscode-icons_file-type-js-official.jpg' alt="JavaScript" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src='logos_react.jpg' alt="React" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src='logos_bootstrap.jpg' alt="Bootstrap" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src='vscode-icons_file-type-vscode.jpg' alt="VSCode" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src='github.jpg' alt="GitHub" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src='vscode-icons_file-type-css.jpg' alt="CSS" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3">
          <img src='logos_git-icon.jpg' alt="Git" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Tech;

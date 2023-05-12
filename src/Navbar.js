import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar(props) {
  const [currentSubject ,setCurrentSubject] = useState("MONGO-DB");
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-success mb-5">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse ml-auto" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Subjects
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <button className="dropdown-item" id="mongo" 
          onClick={()=> {setCurrentSubject("MONGO-DB")
          props.changeData("MONGO")}} >MONGO-DB</button>
          <button className="dropdown-item" id="shortcuts" onClick={()=> {setCurrentSubject("Shortcuts")
          props.changeData("CSS")}}>CSS</button>
          <button className="dropdown-item" id="jquery" 
          onClick={()=> {
          setCurrentSubject("JQUERY");
          props.changeData("JQUERY");}
          }
          >JQUERY</button>
          <button className="dropdown-item" id="react" onClick={()=> {setCurrentSubject("Shortcuts")
          props.changeData("REACT")}}>REACT</button>
        </div>
      </li>
    </ul>
    <div className='ms-auto'>
    <span className='fw-bold'>{currentSubject}</span>
    </div>
  </div>
</nav>

  );
}

export default Navbar;

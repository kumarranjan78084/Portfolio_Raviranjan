import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <span className="headline">
          <h1>Raviranjan Kumar</h1>
        </span>
        <div className='bar-list'>
          <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
          <ul className={isOpen ? 'active' : ''}>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

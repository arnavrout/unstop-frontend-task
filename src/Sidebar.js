// Sidebar.js
import React, { useState, useContext } from 'react';
import './Sidebar.css';
import { SidebarContext } from './SidebarContext';


const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('Assessments');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  //to show hamburger when screen in mobile view
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);


  //clicking the "X" icon when we want to go back from hamburger menu
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
    
    <div className='menuWrap'>
    <p>Menu</p>
      {showSidebar && (
        <i className="fas fa-times cross-icon hamburgercross" onClick={handleCloseSidebar}></i>
      )}
    </div>


      <ul className="sidebar-options">
      <li>
        <div>
            <i className="fas fa-chart-bar"></i>
        </div>
        <div>
            Dashboard
        </div>
        </li>
        <li
    className={selectedOption === 'Assessments' ? 'selected' : ''}
    onClick={() => handleOptionClick('Assessments')}
    >
    <div>
        <i className="fas fa-clipboard-list"></i>
    </div>
    <div>
        Assessments
    </div>
    </li>

        <li>
        <div>
            <i className="fas fa-book"></i>
        </div>
        <div>
            My Library
        </div>
        </li>
        <hr />
        <li>
        <div>
            <i class="fa-solid fa-box"></i>
        </div>
        <div>
            Round <br /> Status
        </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

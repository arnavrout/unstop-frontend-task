import React, { useState, useEffect, useContext } from 'react'
import './Assessment.css';
import NewAssessmentForm from './NewAssessmentForm';
import { SidebarContext } from './SidebarContext';



const Assessment = () => {
        const [showNewAssessmentForm, setShowNewAssessmentForm] = useState(false);
      
        //showing new assessment form
        const handleNewAssessmentClick = () => {
          setShowNewAssessmentForm(true);
        };
      
        //going back from new assessment form
        const handleFormClose = () => {
          setShowNewAssessmentForm(false);
        };

        const [showHorizontalBox, setShowHorizontalBox] = useState(false);

        //Not displaying any button when screen size is more than 680px
        useEffect(() => {
            const handleResize = () => {
              const screenWidth = window.innerWidth;
              setShowHorizontalBox(screenWidth >= 680);
            };
            window.addEventListener('resize', handleResize);
        
            handleResize();
             return () => {
              window.removeEventListener('resize', handleResize);
            };
          }, []);
        

  const toggleHorizontalBox = () => {
    setShowHorizontalBox((prev) => !prev);
  };

  const { showSidebar, setShowSidebar } = useContext(SidebarContext);

  const handleToggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };
      
  return (
    <div className="assessment-section-container">
      <div className="assessment-section">
      <div>
      <button className={`hamburger-menu ${showSidebar ? 'active' : ''}`} onClick={handleToggleSidebar}>
      <i class="fa-solid fa-bars-staggered"></i>
      </button>
        <h2 style={{ display: 'inline-block' }}>Assessment | </h2>
        <p style={{ display: 'inline-block', marginLeft: '10px', color: 'rgba(0, 115, 230, 1)', fontWeight: "500"  }}>My Assessments</p>
    </div>
        
        <div className="assessment-content">
        <div className="headButton">
          <p className='subHeading'>Assessment overview</p>
          <div className='icons'>
          <i class="fa-solid fa-magnifying-glass hideIcon"></i>
          <i class="fa-solid fa-filter hideIcon"></i>
          <button className="toggle-button" onClick={toggleHorizontalBox}>
          {showHorizontalBox ? <i className="fas fa-chart-line"></i> : <i className="fas fa-chart-line"></i>}
        </button>
        </div>
          </div>
          {showHorizontalBox && (
          <div className="horizontal-box-wrapper">
          <div className="horizontal-box">
            <div className="box-section">
              <p className='boxHeading'>Total Assessment</p>
              <div>
              <i class="fa-solid fa-bars-progress"></i>
              <span>34</span>
              </div>
            </div>
            <div className="box-section">
              <p className='boxHeading'>Candidates</p>
              <div>
              <i class="fas fa-users"></i>
              <span>11,145 | 114</span>
              </div>
            </div>
            <div className="box-section">
              <p className='boxHeading'>Candidates Source</p>
              <div>
              <i class="fa-solid fa-globe"></i>
              <span>11,000| 145| 145</span>
              </div>
            </div>
            <div className="box-section">
              <p className='boxHeading'>Total Purpose</p>
              <div>
              <i class="fa-solid fa-link"></i>
              <span>11</span>
              </div>
            </div>
          </div>
          </div>
          )}
        </div>
      </div>
      <div className="my-assessment-section">
        <p className='subHeading'>My Assessment</p>
        <div className="rectangle-boxes">
          <div className="boxNew" onClick={handleNewAssessmentClick}>
            <i className="fas fa-plus addIcon"></i>
            <h3 >New Assessment</h3>
            <p>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
          </div>
          <div className="box">
          <span className='iconsSeperate'>
          <i class="fa-solid fa-bag-shopping boxI"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </span>
            <h4 >Math Assessment</h4>
            <p>Job | <i class="fa-regular fa-calendar-days"></i> 20 Apr 2023</p>
            <div class="dotted-lines"></div>
            <span className='boxFooter'>
               <p className='share'><i class="fa-solid fa-link"></i>Share</p>
                <p className='LP'>LP</p> 
            </span>
               
          </div>
          <div className="box">
          <span className='iconsSeperate'>
          <i class="fa-solid fa-bag-shopping boxI"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </span>
            <h4 >Math Assessment</h4>
            <p>Job | <i class="fa-regular fa-calendar-days "></i> 20 Apr 2023</p>
            <div class="dotted-lines"></div>
            <span className='boxFooter'>
               <p className='share'><i class="fa-solid fa-link"></i>Share</p>
                <p className='LP'>LP</p> 
            </span>
            </div>
        </div>
        {showNewAssessmentForm && (
        <div className="overlay">
            <NewAssessmentForm onClose={handleFormClose} />
        </div>
      )}
      </div>
    </div>
  )
}

export default Assessment;
import React from 'react';

const Sidebar = ({ filterTasks }) => {
  return (
    <aside className="col-1 remove-tablet">
      <div className="row-direction gap-2">
        <div className="aside-top">
          <h1 className="p-2">TO-DO</h1>
          <div className="circles-div row just-between">
            <img src="./assets/images/open-circle.svg" alt="circle"/>
            <img src="./assets/images/open-circle.svg" alt="circle"/>
            <img src="./assets/images/open-circle.svg" alt="circle"/>
            <img src="./assets/images/open-circle.svg" alt="circle"/>
            <img src="./assets/images/open-circle.svg" alt="circle"/>
          </div>
        </div>
        
        <div className="row-direction gap-1 btn-div p-1">
          <button className="row gap-1 p-0 align-center pointer btn1" onClick={() => filterTasks('yesterday')}>
            <img className="bcg-light-blue" src="./assets/images/calendar.svg" alt="yesterday"/>
            <span className="row just-center align-center">Yesterday</span>
          </button>
          <hr/>
          <button className="row gap-1 p-0 align-center pointer btn1" onClick={() => filterTasks('today')}>
            <img className="bcg-light-blue" src="./assets/images/calendar.svg" alt="today"/>
            <span>Today</span>
          </button>
          <hr/>
          <button className="row gap-1 p-0 align-center pointer btn1" onClick={() => filterTasks('tomorrow')}>
            <img className="bcg-light-blue" src="./assets/images/calendar.svg" alt="tomorrow"/>
            <span>Tomorrow</span>
          </button>
          <hr/>
          <button className="row gap-1 p-0 align-center pointer btn1" onClick={() => filterTasks('all')}>
            <img className="bcg-light-green" src="./assets/images/all-infinite.svg" alt="all" title="all"/> 
            <span>All</span>
          </button>
          <hr/>
        </div> 
      </div>
    </aside>
  );
};

export default Sidebar;

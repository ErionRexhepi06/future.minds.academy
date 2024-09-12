import React from 'react';

const Sidebar = () => {
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
      </div>
    </aside>
  );
};

export default Sidebar;

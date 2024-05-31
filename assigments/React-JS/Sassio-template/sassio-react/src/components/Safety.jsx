

export default function Safety(props) {
    return (
        <div className="wrapper-full text-center">
         <button className="btn-primary speciale-1">SAFETY FIRST</button>
         <h1 className="text-center">You're in a secure company</h1>
         <div className="secure-section">
            <div className="row square all-shadow">
               <div className="col-5 m-2 p-2">
                  <img src="images/timer.png" alt="timer-picture" />
               </div>
               <span className="col-5 m-1 text-left">
                  <h3 className="dark">Real time activity</h3>
                  <p>
                     Get instant insight on what's happening in your business. It uses a dictionary of the over 200
                     Latin words,
                  </p>
               </span>
            </div>
            <div className="row  square all-shadow">
               <div className="col-5  m-2 p-2">
                  <img src="images/cloud-storage.png" alt="cloud-storage" />
               </div>
               <span className="col-5 m-1 text-left">
                  <h3 className="dark">Instant deploy</h3>
                  <p>
                     Deploy your project in a fraction of a second, no time! It uses a dictionary of the over 200
                     Latin
                     words,
                  </p>
               </span>
            </div>
            <div className="row square all-shadow">
               <div className="col-5  m-2 p-2">
                  <img src="images/touch.png" alt="touch-screen" />
               </div>
               <span className="col-5 m-1 text-left">
                  <h3 className="dark">Easy integrations</h3>
                  <p>
                     Integrate our solution with other tech leaders in the industry. It uses a dictionary of the
                     over
                     200 Latin words,.
                  </p>
               </span>
            </div>
            <div className="row square all-shadow">
               <div className="col-5  m-2 p-2">
                  <img src="images/pen-tool.png" alt="pen-tool" />
               </div>
               <span className="col-5 m-1 text-left">
                  <h3 className="dark">Perfect UI/UX</h3>
                  <p>
                     Get instant insight on what's happening in your business. It uses a dictionary of the over 200
                     Latin words,
                  </p>
               </span>
            </div>
         </div>
         <div className="benefit-section">
            <div className="row">
               <div className="col-1 m-2 p-2 replacement">
                  <img src="images/benefit.png" alt="benefits" />
               </div>
               <div className="col-1 m-3 p-3 benefit-info">
                  <div className="col benefit-header text-left ">
                     <button className="btn-primary speciale-1">SAFETY FIRST</button>
                     <h3 className="display-1">Tons of benefit</h3>
                  </div>
                  <div className="benefits">
                     <ul>
                        <li>
                           <div className="benefit-item">
                              <div className="icon-container">
                                 <span className="material-symbols-outlined">check</span>
                              </div>
                              <span className="dark">Development</span>
                           </div>
                        </li>
                        <li>
                           <div className="benefit-item">
                              <div className="icon-container">
                                 <span className="material-symbols-outlined">check</span>
                              </div>
                              <span className="dark">Web Design</span>
                           </div>
                        </li>
                        <li>
                           <div className="benefit-item">
                              <div className="icon-container">
                                 <span className="material-symbols-outlined">check</span>
                              </div>
                              <span className="dark">Do Magic</span>
                           </div>
                        </li>
                        <li>
                           <div className="benefit-item">
                              <div className="icon-container">
                                 <span className="material-symbols-outlined">check</span>
                              </div>
                              <span className="dark">Save Time</span>
                           </div>
                        </li>
                     </ul>
                     <ul className="item-left">
                        <li>
                           <div className="benefit-item">
                              <div className="icon-container">
                                 <span className="material-symbols-outlined">check</span>
                              </div>
                              <span className="dark">App builder</span>
                           </div>
                        </li>
                        <li>
                           <div className="benefit-item">
                              <div className="icon-container">
                                 <span className="material-symbols-outlined">check</span>
                              </div>
                              <span className="dark">Dashboard</span>
                           </div>
                        </li>
                        <li>
                           <div className="benefit-item">
                              <div className="icon-container">
                                 <span className="material-symbols-outlined">check</span>
                              </div>
                              <span className="dark">Feedback</span>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <button className="btn-free just-start">FREE TRIAL</button>
               </div>
               <div className="col-1 m-2 p-2 benefit-img">
                  <img src="images/benefit.png" alt="benefits" className="benefit-img" />
               </div>
            </div>
         </div>
      </div>
    );
}
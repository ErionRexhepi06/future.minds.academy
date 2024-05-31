export default function Path(props) {
    return (
        <div className="row path-succes-section">
         <div className="col-2">
            <img src="images/trending.png" className="path-img" />
         </div>
         <div className="path-succes">
            <div className="col-2 gap-2">
               <button className="speciale-1 just-start">WE ARE YOUR ONLY</button><br/>
               <h1 className="dark title">Path to Success</h1>
               <br/>
               <div className="row gap-2 m-3 align-start">
                  <div className="col-2">
                     <div className="back-hover">
                        <img src="images/letter.png" alt="letter"/>
                     </div>
                  </div>
                  <div className="col-5">
                     <h3 className="dark">Mail Management</h3><br/>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet <br/>aut autem eum laudantium quas
                        recusandae.</p>
                  </div>
               </div>
               <br/><br/>
               <div className="row gap-2">
                  <div className="col-2">
                     <div className="back-hover">
                        <img src="images/package-delivery.png" alt="package-delivery"/>
                     </div>
                  </div>
                  <div className="col-5">
                     <h3 className="dark">Customers Tracking</h3><br/>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet <br/>aut autem eum laudantium quas
                        recusandae.</p>
                  </div>
               </div>
               <br/><br/>
               <div className="row gap-2">
                  <div className="col-2">
                     <div className="back-hover"><img src="images/reporting.png" alt="Reporting"/>
                     </div>
                  </div>
                  <div className="col-5">
                     <h3 className="dark">Advanced Reporting</h3><br/>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet <br/>aut autem eum laudantium quas
                        recusandae.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
}
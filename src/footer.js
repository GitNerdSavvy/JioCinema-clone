import React from 'react'
import './footer.css';
function footer() {
  return (
<div className="flex ">

    <div className="flex size pro">
        <div className="left flex">
            <div className="l1">
                <h3>JioCinema</h3>
                <h5>For You</h5>
                <h5>Sports</h5>
                <h5>free</h5>
                <h5>Premium</h5>
            </div>
            <div className="l1">
                <h3>Support</h3>
                <h5>Help Center</h5>
                <h5>Terms of Use</h5>
                <h5>Privacy Policy</h5>
                <h5>Content Complaints</h5>
            </div>
            
        </div>
     </div>

        {/* <div className="flex">
            <div className="l3">
                <h2>Connect With Us</h2>
            </div>
            <div className="l3">
                <h2>Download The App</h2>
            </div>
        </div> */}
    </div>
    
  )
}

export default footer
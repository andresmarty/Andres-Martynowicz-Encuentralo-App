import React from 'react'
import './footer.css'

function footer() {
    return (
        <div className="main-footer">
        <div className="container">
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} ENCUENTRALO | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    )
}

export default footer

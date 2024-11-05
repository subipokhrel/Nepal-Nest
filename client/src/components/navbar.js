// Import React to enable the use of React components
import React from "react";

// Define the Navbar component as a functional component
function Navbar() {
  return (
    <div>
      {/* 
        Render a Bootstrap navbar. 
        This navbar is a generic example from the Bootstrap website.
      */}
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler" // Button for toggling the navbar in mobile view
          type="button"
          data-toggle="collapse" // Triggers the collapse of the navbar
          data-target="#navbarNav" // Targets the collapsible navbar section
          aria-controls="navbarNav" // Identifies the controlled element
          aria-expanded="false" // Indicates whether the navbar is expanded
          aria-label="Toggle navigation" // Accessibility label for the button
        >
          <span className="navbar-toggler-icon"></span> {/* Icon for the toggler button */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"> {/* Collapsible section of the navbar */}
          <ul className="navbar-nav">
            <li className="nav-item active"> {/* Active link for the current page */}
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

// Export the Navbar component so it can be used in other files
export default Navbar;
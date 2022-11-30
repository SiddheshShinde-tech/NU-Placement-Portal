import React from "react";
import Topnav from "./Topnav";
import { auth } from "../firebase";

function Skeleton() {
  function logOut() {
    auth.signOut();
  }

  return (
    <>
      <Topnav />;
      <div>
        <div className="main-app">
          <div className="sidebar">
            <nav className="main-nav">
              <ul className="main-menu">
                <li className="menu-item active">
                  <a href="#/" className="menu-a">
                    <div className="menu-txt-hld">
                      <i className="fas fa-home menu-icon"></i>
                      <span className="menu-txt">Home</span>
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#/invite" className="menu-a">
                    <div className="menu-txt-hld">
                      <i className="fas fa-user-check menu-icon"></i>
                      <span className="menu-txt">Recruiter</span>
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#/calendar" className="menu-a">
                    <div className="menu-txt-hld">
                      <i className="fas fa-calendar menu-icon"></i>
                      <span className="menu-txt">Calendar</span>
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#/analytics" className="menu-a">
                    <div className="menu-txt-hld">
                      <i className="fas fa-chart-bar menu-icon"></i>
                      <span className="menu-txt">Analytics</span>
                    </div>
                  </a>
                </li>
                {/* <li className="menu-item">
                  <a href="#" className="menu-a" target="_blank">
                    <div className="menu-txt-hld">
                      <i className="fas fa-users menu-icon"></i>
                      <span className="menu-txt">Students</span>
                    </div>
                  </a>
                </li> */}
                <li className="menu-item">
                  <a href="#/viewcompany" className="menu-a">
                    <div className="menu-txt-hld">
                      <i class="fas fa-building menu-icon"></i>
                      <span className="menu-txt">Company</span>
                    </div>
                  </a>
                </li>
                <li className="menu-item" onClick={logOut}>
                  <a href="" className="menu-a" target="">
                    <div className="menu-txt-hld">
                      <i class="fas fa-sign-out menu-icon"></i>
                      <span className="menu-txt">Log Out</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skeleton;

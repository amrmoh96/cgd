import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";
import DashBoard from './components/dashboard/dashboard';


const Navigation = ({onSignOut}) => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <DashBoard onSignOut={onSignOut} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation
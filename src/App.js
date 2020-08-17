import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/login";
import Navigation from "./router";


function App() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLoggedIn, setisLoggedIn] = useState(false);
  
  useEffect(() => {
    let user = getUser();
    if (user) {
      user.password = window.atob(user.password);
      setUser(user);
      doLogin();
    } else {
      setisLoggedIn(false);
    }
  }, [isLoggedIn]);


  const getUser = () => {
    if (window.localStorage.user && window.localStorage.user != null) {
      return JSON.parse(window.localStorage.user);
    }
    return;
  };

  const handleLogin = () => {
    let _user = user;
    _user.password = window.btoa(_user.password);
    window.localStorage.setItem("user", JSON.stringify(_user));
    doLogin();
  };

  const handleUsername = (e) => {
    setUser({ username: e.target.value, password: user.password });
  };

  const handlePassword = (e) => {
    setUser({ username: user.username, password: e.target.value });
  };

  const doLogin = () => {
    setisLoggedIn(true);
  };

  const SignOut = () => {
    window.localStorage.removeItem("user");
    setisLoggedIn(false);
    setUser({});
  };

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Navigation onSignOut={SignOut} />
      ) : (
        <Login
          user={user}
          onLogin={handleLogin}
          onUsernameChange={handleUsername}
          onPasswordChange={handlePassword}
        />
      )}
    </React.Fragment>
  );
}

export default App;

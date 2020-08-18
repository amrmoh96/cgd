import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/login";
import Navigation from "./router";

function App() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let token = getToken();
    if (token) {
      doLogin();
    } else {
      setisLoggedIn(false);
    }
  }, [isLoggedIn]);

  const getToken = () => {
    if (window.localStorage.token && window.localStorage.token != null) {
      return window.localStorage.token;
    }
    return;
  };

  const handleLogin = () => {
    setIsWaiting(true);
    fetch("http://128.199.0.16:3000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: user.username,
        password: user.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setIsWaiting(false);
        if (json.message.token !== undefined) {
          window.localStorage.setItem("token", json.message.token);
          doLogin();
        }
      });
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
    window.localStorage.removeItem("token");
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
          isWaiting={isWaiting}
        />
      )}
    </React.Fragment>
  );
}

export default App;

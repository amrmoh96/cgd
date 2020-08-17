import React from "react";
import "./login.css";

function Login({ user, onLogin, onPasswordChange, onUsernameChange }) {
  return (
    <div className="login">
      <h1 className="login__title">LOGIN</h1>
      <div className="login__box">
        <form>
          <div className="login__input">
            <input
              type="text"
              placeholder="username"
              value={user.username || ''}
              onChange={onUsernameChange}
            />
          </div>
          <div className="login__input">
            <input
              type="password"
              placeholder="password"
              value={user.password || ''}
              onChange={onPasswordChange}
            />
          </div>
          <button
            type="button"
            onClick={() => onLogin(user)}
            className="login__button"
          >
            Login
          </button>
        </form>
        <a className="login__forget__password__link" href="/">
          Forget password?
        </a>
      </div>
      <p className="login__signup">
        Don't have an account{" "}
        <b>
          <u>Sign Up now</u>
        </b>
      </p>
      <p className="login__copyrights">&copy; Copy rights 2020-2021 reserved</p>
    </div>
  );
}

export default Login;

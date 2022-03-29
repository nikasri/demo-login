import React, { useRef, useState } from "react";
import classes from "./LoginModal.module.css";
import SecurityPhotoModal from "./SecurityPhotoModal";

const LoginModal = () => {
  const [hasEnteredUsername, setHasEnteredUsername] = useState(false);
  const [hasConfirmedPhoto, setHasConfirmedPhoto] = useState(false);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitUsernameHandler = (event) => {
    setHasEnteredUsername(true);
  };

  const confirmPhotoHandler = (event) => {
    setHasConfirmedPhoto(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required ref={usernameInputRef} />
        </div>
        {hasConfirmedPhoto && (
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
        )}
        {!hasEnteredUsername && (
          <div className={classes.actions}>
            <button onClick={submitUsernameHandler}>Login</button>
          </div>
        )}
        {hasEnteredUsername && !hasConfirmedPhoto && (
          <section>
            <span>
                <SecurityPhotoModal username={usernameInputRef} ></SecurityPhotoModal>
              <div className={classes.actions}>
                <button>No</button>
                <button onClick={confirmPhotoHandler}>Yes</button>
              </div>
            </span>
          </section>
        )}
        {hasEnteredUsername && hasConfirmedPhoto && (
          <div className={classes.actions}>
            <button type="submit" onClick={submitFormHandler}>
              Login
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default LoginModal;

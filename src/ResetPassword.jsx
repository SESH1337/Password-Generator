import React, { useEffect } from "react";

export function ResetPassword({ restartImageSrc, password, generatePassword }) {
  useEffect(() => {
    // Call generatePassword function once on component mount to retrieve password
    generatePassword();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleRestartPassword = () => {
    generatePassword();
  };

  console.log(password); // This logs the current password whenever it changes

  return (
    <>
      <input
        className="input__content"
        type="text"
        placeholder=""
        defaultValue={password}
        readOnly // Make the input read-only to prevent user editing
      />
      <button className="reset__button" onClick={handleRestartPassword}>
        <img
          className="restart__image"
          src={restartImageSrc}
          alt="restart your password"
        />
      </button>
    </>
  );
}

import React, { useEffect } from "react";

export function ResetPassword({
  restartImageSrc,
  password,
  generatePassword,
  setPassword,
}) {
  useEffect(() => {
    // Generate a new password when component mounts if the current password is too short
    if (password.length < 7) {
      const length = 10; // Set a default length for the new password
      const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      let newPassword = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset[randomIndex];
      }

      setPassword(newPassword);
    }
  }, [password, setPassword]); // Run this effect when password or setPassword changes

  const handleRestartPassword = () => {
    generatePassword(); // Regenerate password when the button is clicked
  };

  return (
    <>
      <input
        className="input__content"
        type="text"
        placeholder=""
        value={password} // Use value instead of defaultValue to display dynamic value
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

import React from "react";

export function SolidPassword({ password }) {
  console.log(password);

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  if (
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialSymbol &&
    password.length >= 13
  ) {
    return (
      <div>
        <h2 className="solid__password">Strong</h2>
      </div>
    );
  } else if (
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    password.length >= 7
  ) {
    return (
      <div>
        <h2 className="medium__password">Medium</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="weak__password">Weak</h2>
      </div>
    );
  }
}

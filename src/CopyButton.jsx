import React, { useState } from "react";

export function CopyButton({ copyImageSrc, password }) {
  const [copied, setCopied] = useState(false);

  const handleCopyPassword = async () => {
    try {
      // Copy the password value to the clipboard using the Clipboard API
      await navigator.clipboard.writeText(password);
      setCopied(true); // Set copied state to true on successful copy
      setTimeout(() => {
        setCopied(false); // Reset copied state after 2 seconds
      }, 1000);
    } catch (error) {
      console.error("Failed to copy password:", error);
      alert("Failed to copy password. Please try again.");
    }
  };

  return (
    <button
      className={`copy__button ${copied ? "copied__button" : ""}`}
      onClick={handleCopyPassword}
    >
      <img className="copy__button__img" src={copyImageSrc} alt="button copy" />
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

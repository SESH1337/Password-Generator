import React, { useState, useEffect } from "react";

export const CheckboxManage = ({ items, generatePassword, setCheckbox }) => {
  const [checkboxes, setCheckboxes] = useState({
    // Initialize the checkboxes state with specific items checked by default
    uppercase: true, // Set "uppercase" to initially checked
    numbers: true, // Set "numbers" to initially checked
    lowercase: false, // Set others to initially unchecked
    special: false,
  });

  // Call generatePassword function once on component mount to retrieve password
  // Empty dependency array ensures this effect runs only once on mount

  const handleCheckboxChange = (itemId) => {
    // Toggle the checkbox state
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [itemId]: !prevCheckboxes[itemId], // Toggle the checkbox state
    }));
  };

  useEffect(() => {
    // Define variables to build the character set for the password
    let charSet = "";

    // Iterate through checkboxes to build the character set based on selected options
    items.forEach((item) => {
      if (checkboxes[item.id]) {
        switch (item.id) {
          case "uppercase":
            charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
          case "lowercase":
            charSet += "abcdefghijklmnopqrstuvwxyz";
            break;
          case "numbers":
            charSet += "0123456789";
            break;
          case "special":
            charSet += "!@#$%^&*()_+{}[]|:;''<>,.?/~";
            break;
          default:
            break;
        }
      }
    });

    // Call setCheckbox to update the password generation with the new character set
    setCheckbox(charSet);
  }, [checkboxes, items, setCheckbox]);

  return (
    <div>
      <div className="checkbox__container">
        {items.map((item) => (
          <label key={item.id} className="checkbox__item">
            <input
              type="checkbox"
              id={item.id}
              checked={!!checkboxes[item.id]} // Use !! to convert to boolean
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

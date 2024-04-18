import React, { useState } from "react";

export const CheckboxManage = ({ items, generatePassword, setCheckbox }) => {
  const [checkboxes, setCheckboxes] = useState({});

  const handleCheckboxChange = (itemId) => {
    // Toggle the checkbox state
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [itemId]: !prevCheckboxes[itemId], // Toggle the checkbox state
    }));

    // Perform actions based on which checkbox is toggled
    switch (itemId) {
      case "uppercase":
        if (!checkboxes[itemId]) {
          setCheckbox("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }
        break;
      case "lowercase":
        if (!checkboxes[itemId]) {
          setCheckbox("abcdefghijklmnopqrstuvwxyz");
        }
        break;
      case "numbers":
        if (!checkboxes[itemId]) {
          setCheckbox("0123456789");
        }
        break;
      case "special":
        if (!checkboxes[itemId]) {
          setCheckbox("!@#$%^&*()_+{}[]|:;''<>,.?/~");
        }
        break;
      default:
        break;
    }
  };

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

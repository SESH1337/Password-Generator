import { CheckboxManage } from "./CheckboxManage";

export const CheckboxGroup = ({ generatePassword, setCheckbox }) => {
  // Define checkbox categories
  const checkboxItems = [
    { id: "uppercase", label: "Uppercase" },
    { id: "lowercase", label: "Lowercase" },
    { id: "numbers", label: "Numbers" },
    { id: "special", label: "Special Characters" },
  ];

  return (
    <div>
      <CheckboxManage
        items={checkboxItems}
        setCheckbox={setCheckbox}
        generatePassword={generatePassword}
      />
    </div>
  );
};

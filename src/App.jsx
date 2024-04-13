import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Logo } from "./Logo";
import { HeadingText } from "./HeadingText";
import { SolidPassword } from "./SolidPassword";

function App() {
  const [sliderValue, setSliderValue] = useState(7);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const length = sliderValue;
    const charset =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;"<>,.?/~';

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="container">
      <Logo />
      <HeadingText />
      <PasswordWrapper
        password={password}
        setPassword={setPassword}
        generatePassword={generatePassword}
      />
      <SolidPassword />
      <PasswordLength
        minLength={7}
        maxLength={30}
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
      />
      <CheckboxGroup />
    </div>
  );
}

function PasswordWrapper({ password, generatePassword, setPassword }) {
  return (
    <div className="input__wrapper">
      <div className="input__field">
        <ResetPassword
          restartImageSrc={
            "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2028.4375C8.49998%2028.4375%203.22498%2023.15%203.22498%2016.6625C3.22498%2010.175%208.49998%204.875%2015%204.875C16.3375%204.875%2017.6375%205.0625%2018.8875%205.45C19.3875%205.6%2019.6625%206.125%2019.5125%206.625C19.3625%207.125%2018.8375%207.4%2018.3375%207.25C17.275%206.925%2016.15%206.75%2015%206.75C9.53748%206.75%205.09998%2011.1875%205.09998%2016.65C5.09998%2022.1125%209.53748%2026.55%2015%2026.55C20.4625%2026.55%2024.9%2022.1125%2024.9%2016.65C24.9%2014.675%2024.325%2012.775%2023.2375%2011.15C22.95%2010.725%2023.0625%2010.1375%2023.5%209.85C23.925%209.5625%2024.5125%209.675%2024.8%2010.1125C26.1%2012.05%2026.7875%2014.3125%2026.7875%2016.6625C26.775%2023.15%2021.5%2028.4375%2015%2028.4375Z'%20fill='black'/%3e%3cpath%20d='M20.1625%207.5875C19.9%207.5875%2019.6375%207.475%2019.45%207.2625L15.8375%203.1125C15.5%202.725%2015.5375%202.125%2015.925%201.7875C16.3125%201.45%2016.9125%201.4875%2017.25%201.875L20.8625%206.025C21.2%206.4125%2021.1625%207.0125%2020.775%207.35C20.6125%207.5125%2020.3875%207.5875%2020.1625%207.5875Z'%20fill='black'/%3e%3cpath%20d='M15.95%2010.6625C15.6625%2010.6625%2015.375%2010.525%2015.1875%2010.275C14.8875%209.86251%2014.975%209.27501%2015.3875%208.96251L19.6%205.88751C20.0125%205.57501%2020.6%205.67501%2020.9125%206.08751C21.225%206.50001%2021.125%207.08751%2020.7125%207.40001L16.5%2010.4875C16.3375%2010.6125%2016.15%2010.6625%2015.95%2010.6625Z'%20fill='black'/%3e%3c/svg%3e"
          }
          password={password}
          generatePassword={generatePassword}
          setPassword={setPassword}
        />
      </div>

      <CopyButton
        copyImageSrc={
          "data:image/svg+xml,%3csvg%20width='20'%20height='24'%20viewBox='0%200%2020%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.75'%20y='0.75'%20width='14.5'%20height='18.5'%20rx='3.25'%20stroke='black'%20stroke-width='1.5'/%3e%3crect%20x='4.75'%20y='4.75'%20width='14.5'%20height='18.5'%20rx='3.25'%20fill='black'%20stroke='black'%20stroke-width='1.5'/%3e%3c/svg%3e"
        }
      />
    </div>
  );
}

function ResetPassword({ restartImageSrc, password, generatePassword }) {
  const handleRestartPassword = () => {
    generatePassword();
  };
  return (
    <>
      <input
        className="input__content"
        type="text"
        placeholder="Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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

function CopyButton({ copyImageSrc }) {
  return (
    <button className="copy__button">
      <img className="copy__button__img" src={copyImageSrc} alt="button copy" />
      Copy
    </button>
  );
}

const CheckboxGroup = () => {
  // Define checkbox categories
  const checkboxItems = [
    { id: "uppercase", label: "Uppercase" },
    { id: "lowercase", label: "Lowercase" },
    { id: "numbers", label: "Numbers" },
    { id: "special", label: "Special Characters" },
  ];

  return (
    <div>
      <CheckboxManage items={checkboxItems} />
    </div>
  );
};

const CheckboxManage = ({ items }) => {
  const [checkboxes, setCheckboxes] = useState("");
  return (
    <div>
      <div className="checkbox__container">
        {items.map((item) => (
          <label key={item.id} className="checkbox__item">
            <input
              type="checkbox"
              id={item.id}
              checked={checkboxes[item.id]}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

function PasswordLength({ minLength, maxLength, setSliderValue, sliderValue }) {
  const handleSliderChange = (event) => {
    let tempSliderValue = parseInt(event.target.value); // Get the current slider value as an integer

    // Ensure the slider value is at least 7
    if (tempSliderValue < minLength) {
      tempSliderValue = minLength; // Set the minimum allowed value if below 7
    }

    setSliderValue(tempSliderValue); // Update the slider value in the component state

    const progress =
      ((tempSliderValue - minLength) / (event.target.max - minLength)) * 100; // Calculate progress percentage starting from 7

    event.target.style.background = `linear-gradient(to right, #00FFFF ${progress}%, #ccc ${progress}%)`;
  };

  // <PasswordRandomizer sliderValue={sliderValue} />;

  return (
    <div className="slider-container">
      <div className="value4">Password Length: {sliderValue}</div>
      {/* Input range slider */}
      <input
        type="range"
        id="range4"
        min={minLength} // Set minimum value to 7
        max={maxLength}
        value={sliderValue}
        className="custom-range"
        onChange={handleSliderChange}
      />
    </div>
  );
}

export default App;

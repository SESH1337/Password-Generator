import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Logo } from "./Logo";
import { HeadingText } from "./HeadingText";
import { SolidPassword } from "./SolidPassword";
import { PasswordLength } from "./PasswordLength";
import { CheckboxGroup } from "./CheckboxGroup";
import { PasswordWrapper } from "./PasswordWrapper";

function App() {
  let defaultValue = 7;
  const [sliderValue, setSliderValue] = useState(defaultValue);
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
    return generatePassword;
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
      <CheckboxGroup generatePassword={generatePassword} />
    </div>
  );
}

export default App;

export function PasswordLength({
  minLength,
  maxLength,
  setSliderValue,
  sliderValue,
}) {
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

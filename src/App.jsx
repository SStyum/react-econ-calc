import { useState } from "react";

import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue, ) => {
    setUserInput(prevState => {
        return {
            ...prevState,
            [inputIdentifier]: +newValue,
        };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid ? <Results userInput={userInput} /> : <p className="center">Please enter a duration greater than 0!</p>}
    </>
  )
}

export default App

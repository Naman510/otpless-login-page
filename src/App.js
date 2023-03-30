import "./styles.css";
import {useEffect} from "react";

export default function App() {
  useEffect(() => {
 // Define the 'otpless' function
 window.otpless = (otplessUser) => {
  // Retrieve the user's details after successful login
  const waName = otplessUser.waName;
  const waNumber = otplessUser.waNumber;
  console.log(waName);
  console.log(waNumber);
		  
  // Handle the signup/signin process
  // ...
 };
}, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

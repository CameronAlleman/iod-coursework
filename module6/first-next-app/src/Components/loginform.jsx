"use client";

import { useState } from "react";

export default function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState(""); //useState sets initial value to an empty string
  const [userPassword, setUserPassword] = useState("");
  const [passwordAttemptCount, setPasswordAttemptCount] = useState(0);

  console.log({ passwordAttemptCount });

  if (passwordAttemptCount >= 5) {
    setSubmitResult(
      "Too many incorrect password attempts. Please try again in 2 weeks"
    );
  }

  const [submitResult, setSubmitResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
      setPasswordAttemptCount(passwordAttemptCount + 1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setPasswordAttemptCount(passwordAttemptCount + 1);
    } else {
      setSubmitResult("Successful login.");
    }
  };

  return (
    <div>
      <div className="LoginForm componentBox">
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange.
             onChange handler uses event param e to access target value.
             Whenever user types, new value is stored in state. */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)} //on this line you can set paramenters on the input field, uppercase, spaces, email validity
            />
          </label>
        </div>
        {/* <input type="file" /> user can upload a file */}
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword} //value is related to state. if you force a value it wont be able to be changed
              name="password"
              onChange={(e) => {
                setUserPassword(e.target.value);

                console.log("new value", e.target.value, " at ", Date.now()); //can be a delay when re rendering pages
              }} //anything after curly braces immediately returned you can write it as a function
            />
          </label>
        </div>
      </div>
    </div>
  );
}
// try removing the onChange prop and typing in a field

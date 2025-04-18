import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput"; //import custom hook

export default function SubscribeForm() {
  const [status, setStatus] = useState("");
  const [nameInputProps, resetName] = useFormInput("Mary");
  const [lastnameInputProps, resetLastName] = useFormInput("Poppins"); //add extra form in

  const [emailInputProps, resetEmail] = useFormInput("mary@pop.com");

  function handleSubscribe() {
    resetName();
    resetEmail();
    setStatus("Thanks for subscribing!");
  }

  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name: <input {...nameInputProps} />
      </label>

      <label>
        Last name: <input {...lastnameInputProps} />
      </label>

      <label>
        Email: <input {...emailInputProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}

import { useState } from "react";

//re-usable form input hook
useState;
export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const reset = () => setValue("");

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return [inputProps, reset];
}

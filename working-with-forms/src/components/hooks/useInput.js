import { useState } from "react";

export const useInput = (defaultValue, valueFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const isValid = valueFn(enteredValue);
  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };
  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !isValid,
  };
};

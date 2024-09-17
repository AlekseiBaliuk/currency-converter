import React from "react";
import * as SC from "./Input.styled";

interface IProps {
  setInput: (value: number) => void;
}

export const InputField = ({ setInput }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(e.target.value));
  };

  return (
    <div>
      <SC.InputTitle>Amount</SC.InputTitle>
      <SC.Input
        type="text"
        placeholder="Enter the amount"
        onChange={handleChange}
      />
    </div>
  );
};

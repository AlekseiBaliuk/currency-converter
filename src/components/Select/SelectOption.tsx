import React from "react";
import Select from "react-select";
import * as SC from "./SelectOption.styled";

interface IOptions {
  label: string;
  value: string;
}

interface IProps {
  title: string;
  options: Array<IOptions>;
  value: string;
  setFrom: (label: string) => void;
  placeholderOption: string;
}

export const SelectOption = ({
  title,
  options,
  value,
  setFrom,
  placeholderOption,
}: IProps) => {
  return (
    <SC.Wrapper>
      <SC.SelectTitle>{title}</SC.SelectTitle>
      <Select
        options={options}
        onChange={(e) => setFrom(e!.label)}
        value={{ value: value, label: value }}
        placeholder={placeholderOption}
      />
    </SC.Wrapper>
  );
};

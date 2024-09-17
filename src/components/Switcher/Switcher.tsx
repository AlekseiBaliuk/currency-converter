import * as SC from "./Switcher.styled";
import { HiSwitchHorizontal } from "react-icons/hi";
import React from "react";

interface IProps {
  flip: () => void;
}

export const Switcher = ({ flip }: IProps) => {
  return (
    <SC.Wrapper>
      <HiSwitchHorizontal size="30px" onClick={() => flip()} />
    </SC.Wrapper>
  );
};

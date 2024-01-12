import React from "react";
import { styled } from "styled-components";

interface Props {
  label: string;
  data: any;
  name: string;
  isDisabled?: boolean;
  onChangeHandler?: (e: any) => void;
}

export const Input: React.FC<Props> = ({
  label,
  data,
  name,
  isDisabled,
  onChangeHandler,
}) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        value={data}
        name={name}
        onChange={onChangeHandler}
        disabled={isDisabled}
      />
    </>
  );
};

const StyledLabel = styled.label`
  color: bisque;
  margin-bottom: 5px;
  font-size: 25px;
  font-family: Brush Script MT, Brush Script Std, cursive;
`;

const StyledInput = styled.input`
  width: auto;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 15px;
  border-radius: 4px;
  outline: none;
  border: 2px solid #91785d;
`;

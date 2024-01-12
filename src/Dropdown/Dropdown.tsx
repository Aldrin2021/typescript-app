import React from "react";
import { styled } from "styled-components";

interface Option {
  value?: string;
  label?: string;
  size?: string;
  price?: string;
  image?: any;
}

interface DropdownProps {
  label: string;
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onChange,
}) => {
  const handleDropdownChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <StyledDiv>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect value={selectedValue} onChange={handleDropdownChange}>
        <StyledOption value="">Select an option</StyledOption>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.select`
  padding: 10px;
  margin-bottom: 10px;
`;

const StyledOption = styled.option`
  color: black;
`;

const StyledLabel = styled.label`
  color: black;
  margin-bottom: 5px;
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size: 25px;
  color: bisque;
`;

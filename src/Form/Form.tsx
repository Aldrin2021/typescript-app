import React from "react";
import { styled } from "styled-components";
import { isFieldEmpty } from "./FormHelpers";
import { Input } from "./Input";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import { Dropdown } from "../Dropdown/Dropdown";
import caramel_macchiato from "../Images/Coffees/caramel-macchiato.jpg";
import salted_caramel_macchiato from "../Images/Coffees/salted-caramel-macchiato.jpeg";
import americano from "../Images/Coffees/americano-coffee.jpeg";
import matcha from "../Images/Coffees/iced-matcha-latte.jpg";
import spanish_latte from "../Images/Coffees/spanish-latte.jpeg";
interface FormData {
  name?: string;
}

export const Form: React.FC<FormData> = () => {
  const coffeeOptions = [
    {
      label: "Caramel Macchiato",
      value: "Coffee_1",
      image: `${caramel_macchiato}`,
    },
    {
      label: "Salted Caramel Macchiato",
      value: "Coffee_2",
      image: `${salted_caramel_macchiato}`,
    },
    {
      label: "Americano",
      value: "Coffee_3",
      image: `${americano}`,
    },
    {
      label: "Matcha Latte",
      value: "Coffee_4",
      image: `${matcha}`,
    },
    {
      label: "Spanish Latte",
      value: "Coffee_5",
      image: `${spanish_latte}`,
    },
  ];

  const sizesOptions = [
    {
      value: "small",
      label: "Small",
      price: "₱89",
    },
    {
      value: "medium",
      label: "Medium",
      price: "₱119",
    },
    {
      value: "large",
      label: "Large",
      price: "₱149",
    },
  ];

  const formDataValue = {
    name: "",
  };

  const [data, setData] = React.useState<FormData>(formDataValue);
  const [selectedOption1, setSelectedOption1] = React.useState<string>("");
  const [selectedOption2, setSelectedOption2] = React.useState<string>("");
  const [selectedPrice, setSelectedPrice] = React.useState<string>("₱0");

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onResetFieldHandler = () => {
    alert("Thank you for submitting your order");
    setData(formDataValue);
    setSelectedOption1("");
    setSelectedOption2("");
    setSelectedPrice("₱0");
  };

  const handleDropdownChange1 = (value: string) => {
    setSelectedOption1(value);
  };

  const handleDropdownChange2 = (value: string) => {
    const selectedOption = sizesOptions.find((size) => size.value === value);
    if (selectedOption) {
      setSelectedOption2(value);
      setSelectedPrice(selectedOption.price);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <NavigationBar />
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormTitle>AC's Cafe</StyledFormTitle>
        <Dropdown
          label="Choose Coffee:"
          options={coffeeOptions}
          selectedValue={selectedOption1}
          onChange={handleDropdownChange1}
        />
        <Dropdown
          label="Choose Size:"
          options={sizesOptions}
          selectedValue={selectedOption2}
          onChange={handleDropdownChange2}
        />
        <Input label="Price:" name="price" data={selectedPrice} isDisabled />
        <Input
          label="Name:"
          name="name"
          data={data.name}
          onChangeHandler={onChangeHandler}
        />
        <StyledSubmitButton
          type="submit"
          disabled={isFieldEmpty(data, coffeeOptions, sizesOptions)}
          onClick={onResetFieldHandler}
        >
          Create order
        </StyledSubmitButton>
      </StyledForm>
    </>
  );
};

const StyledFormTitle = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 15px;
  font-size: 40px;
  font-family: Brush Script MT, Brush Script Std, cursive;
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  align-item: center;
  justify-content: center;
  margin: 50px 0 0 50px;
  max-width: 350px;
  flex-direction: column;
  border: 1px solid saddlebrown;
  padding: 30px;
  border-radius: 5px;
  background: #91785d;
`;

const StyledSubmitButton = styled.button<{ disabled: any }>`
  display: flex;
  align-item: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
  width: 60%;
  border-radius: 3px;
  border: none;
  cursor: ${(props) => (props.disabled ? "disabled" : "pointer")};
  background: ${(props) => (props.disabled ? "#f0f0f0" : "#50c878")};

  &:hover {
    background: ${(props) => (props.disabled ? "#f0f0f0" : "#228b22")};
  }
`;

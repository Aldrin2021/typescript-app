export const isFieldEmpty = (data: any, option1: any[], option2: any[]) => {
  const coffeeDropdownOpt: boolean = option1.some(
    (coffee) => coffee.value.trim() === ""
  );

  console.log("coffeeDropdownOpt", coffeeDropdownOpt);
  const sizesDropdownOpt: boolean = option2.some(
    (sizes) => sizes.value.trim() === ""
  );
  return data.name.trim() === "" || coffeeDropdownOpt || sizesDropdownOpt;
};

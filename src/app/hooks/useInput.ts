import { useState } from "react";
import { FundItem } from "../post/page";

export const useInput = (initialValue: FundItem) => {
  const [inputValue, setInputValue] = useState<FundItem>(initialValue);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return {
    onChangeHandler,
    inputValue,
    setInputValue,
  };
};

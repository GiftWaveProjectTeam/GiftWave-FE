"use client";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

const ESC_KEY = 27;

const onEscapeKeyPress = (fn: () => void) => (keyCode: number) =>
  keyCode === ESC_KEY ? fn() : null;

const useSearch = () => {
  const [isopen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    e.target.value === "" && close();
  };

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      const value = onEscapeKeyPress(close);

      if (
        !ref.current ||
        ref.current.parentElement?.contains(e.target as Node)
      ) {
        isopen === false && open();
      }
    };

    addEventListener("keydown", keydownHandler);

    return () => {
      removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return { value, isopen, ref, changeHandler };
};

export default useSearch;

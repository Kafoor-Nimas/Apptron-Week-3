import { useEffect, useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const [initial] = useState(initialValue);

  useEffect(() => {
    setCount(initialValue);
  }, [initialValue]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(0, prev - 1));

  const reset = () => {
    setCount(initial);
    return initial; 
  };

  return { count, increment, decrement, reset,initial };
};

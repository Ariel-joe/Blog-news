import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return {
    count,
    updateCount,
  };
};

export { useCount };

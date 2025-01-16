import { useState } from "react";
import { Button } from "./components/Button/Button";

const App = () => {
  const [count, setCount] = useState(7);

  const updateCount = () => {
    console.log("Update clicked");

    setCount(count + 1);
    // console.log({ count: count });
  };

  return (
    <>
      <Button count={count} updateCount={updateCount}>
        Click Me
      </Button>
    </>
  );
};

export { App };

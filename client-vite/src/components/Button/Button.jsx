import { Test } from "../Test/Test";
import { clickMe } from "./button-functions";

const Button = ({ bgColor, children, count, updateCount }) => {
  console.log(bgColor);

  return (
    <>
      <button
        style={{
          backgroundColor: `${bgColor ? bgColor : "blue"}`,
          color: "white",
        }}
        className="btn"
        onClick={updateCount}
      >
        {children} - {count}
      </button>
    </>
  );
};

export { Button };

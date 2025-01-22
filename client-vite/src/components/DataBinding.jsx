import { useEffect, useState } from "react";

const DataBinding = () => {
  const [text, setText] = useState("");
  const [valueOnScreen, setValueOnScreen] = useState("Value on screen");

  useEffect(() => {
    // "I will be responsible for getting something from an external source when the input is typed."
    // "I will also be responsible for updating the value that is shown on the screen with the content of what I got from the external source."
    const getSomething = async () => {
      try {
        const something = Math.floor(Math.random() * (100 - 0) + 0);

        setValueOnScreen(something);
      } catch (error) {
        // Handle error
      }
    };

    getSomething();
  }, [text]);

  return (
    <>
      <form>
        <input
          type="text"
          className="border p-2 block"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form>

      <p>{valueOnScreen}</p>
    </>
  );
};

export { DataBinding };

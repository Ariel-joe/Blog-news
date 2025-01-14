import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <div>
        <Button bgColor="green">Button 1</Button>
        <Button>Button 2</Button>
        <Button bgColor="red">Button 3</Button>
        <Button>Button 4</Button>
        <Button bgColor="">Button 5</Button>
      </div>
    </>
  );
}

export { App };

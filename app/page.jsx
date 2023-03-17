import Keyboard from "./components/keyboard/Keyboard";
import SquareGame from "./components/SquareGame";

const page = () => {
  return (
    <div>
      <h1>Welcome to Wordle Pokemon</h1>
      <SquareGame />
      <Keyboard />
    </div>
  );
};

export default page;

import styles from "@/styles/squaregame.module.css";
import Words from "./grid/Words";
const pokemon = "pikachu";
const SquareGame = () => {
  return (
    <div className={styles.square}>
      <Words />
      <Words />
      <Words />
      <Words />
      <Words />
      <Words />
    </div>
  );
};

export default SquareGame;

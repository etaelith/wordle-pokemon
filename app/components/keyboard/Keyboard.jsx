import keys from "./keys";
import styles from "@/styles/keyboard.module.css";
import Key from "./Key";
const Keyboard = () => {
  return (
    <div className={styles.keyContainer}>
      {keys.map((letra, index) => (
        <Key letra={letra} key={index} />
      ))}
    </div>
  );
};

export default Keyboard;

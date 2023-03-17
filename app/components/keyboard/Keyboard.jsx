import React from "react";
import keys from "./keys";
import styles from "@/styles/keyboard.module.css";
const Keyboard = () => {
  console.log(keys);
  return (
    <div className={styles.keyContainer}>
      {keys.map((letra, index) => (
        <button className={styles.button} key={index} value={letra}>
          {letra}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;

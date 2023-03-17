"use client";
import styles from "@/styles/keyboard.module.css";

const Key = ({ letra }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <button className={styles.button} value={letra} onClick={handleClick}>
      {letra}
    </button>
  );
};

export default Key;

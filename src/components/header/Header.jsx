import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <i className="fa-solid fa-terminal"></i>
          <span>Store tech</span>
        </div>
      </div>
    </>
  );
}

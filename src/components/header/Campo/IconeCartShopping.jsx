import React from "react";
import styles from "./IconeCartShopping.module.css";

export function IconeCartShopping() {
  return (
    <>
      <div className={styles.container}>
        <i className="fa-solid fa-cart-shopping"></i>
        <span>99</span>
      </div>
    </>
  );
}

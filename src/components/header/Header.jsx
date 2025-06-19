import React from "react";
import styles from "./Header.module.css";
import { CampoPesquisar } from "./Campo/CampoPesquisar";
import { IconeCartShopping } from "./Campo/IconeCartShopping";
import { ActionUser } from "./Campo/ActionUser";

export function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <i className="fa-solid fa-terminal"></i>
          <span>Store tech</span>
        </div>

        <IconeCartShopping />
        <CampoPesquisar />

        <ActionUser />
      </div>
    </>
  );
}

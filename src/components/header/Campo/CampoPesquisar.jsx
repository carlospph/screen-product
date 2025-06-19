import React from "react";
import styles from "./CampoPesquisar.module.css";

export function CampoPesquisar() {
  return (
    <div className={styles.groupInput}>
      <input type="text" placeholder="Pesquisar produtos" />
    </div>
  );
}

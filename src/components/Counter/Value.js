import React from "react";
import styles from "./Counter.module.css";

const Value = ({ Value }) => (
  <span className={styles.Counter__value}>{Value}</span>
);

export default Value;

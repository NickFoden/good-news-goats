import React, { Component } from "react";
import styles from "./pages.module.css";

class Temp extends Component {
  render() {
    return (
      <section className={styles.section}>
        <h1>Good News Goats</h1>
        <h3>Coming Soon</h3>
        <h3>{new Date().getFullYear()}</h3>
      </section>
    );
  }
}

export default Temp;

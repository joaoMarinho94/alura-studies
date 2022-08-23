import React from "react";
import styles from './button.module.scss'

export class Button extends React.Component {
  render() {
   return (
      <button className={styles.button}>
        Botão
      </button>
    )
 }
}
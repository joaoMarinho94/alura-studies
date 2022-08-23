import React from "react";
import { Button } from "../Button";
import styles from './form.module.scss'

export class Form extends React.Component {
  render() {
    return (
      <form className={styles.newTask} action="">
        <div className={styles.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo:</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="time">Tempo:</label>
          <input
            type="time"
            step={1}
            min="00:00:00"
            max="01:30:00"
            name="time"
            id="time"
            placeholder="o Que você quer estudar"
            required
          />
        </div>

        <Button />
      </form>
    );
  }
}

import React, { FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { ITask } from "../../types/task";
import { Button } from "../Button";
import styles from "./form.module.scss";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export class Form extends React.Component<Props> {
  state = {
    task: "",
    time: "00:00",
  };

  handleNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    this.props.setTasks((prevState) => [
      ...prevState,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState({ task: "", time: "00:00" });
  }

  render() {
    return (
      <form className={styles.newTask} onSubmit={this.handleNewTask.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo:</label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
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
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
            placeholder="o Que você quer estudar"
            required
          />
        </div>

        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

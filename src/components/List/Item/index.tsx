import { ITask } from "../../../types/task";
import styles from "../list.module.scss";

export default function Item({ task, time, completed, id, selected }: ITask) {
  console.log({task, time, completed, id, selected});
  return (
    <li className={styles.item}>
      <h3>{task}</h3> <span>{time}</span>
    </li>
  );
}

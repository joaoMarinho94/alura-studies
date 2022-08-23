import styles from "../list.module.scss";

interface Props {
  task: string;
  time: string;
}

export default function Item({ task, time }: Props) {
  return (
    <li className={styles.item}>
      <h3>{task}</h3> <span>{time}</span>
    </li>
  );
}

import { ITasks } from "../../types/task";
import Item from "./Item";
import styles from "./list.module.scss";


export default function List({ tasks }: ITasks) {
  return (
    <aside className={styles.listTasks}>
      <h2>Estudos do Dia</h2>

      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

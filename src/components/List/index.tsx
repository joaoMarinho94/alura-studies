import Item from './Item';
import styles from './list.module.scss'

export default function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    { task: "Javascript", time: "01:00:00" },
    { task: "Typescript", time: "03:00:00" },
  ];

  return (
    <aside className={styles.listTasks}>
      <h2>Estudos do Dia</h2>

      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item}/>
        ))}
      </ul>
    </aside>
  );
}

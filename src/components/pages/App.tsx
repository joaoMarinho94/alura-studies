import { useState } from "react";
import { ITask} from "../../types/task";
import Cronometer from "../Cronometer";
import { Form } from "../Form";
import List from "../List";
import styles from "./app.module.scss";

function App() {
  const [tasks, setTasks] = useState([] as ITask[]);

  return (
    <div className={styles.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Cronometer />
    </div>
  );
}

export default App;

import Cronometer from '../Cronometer';
import { Form } from '../Form';
import List from '../List';
import styles from './app.module.scss'

function App() {
  return <div className={styles.AppStyle}><Form/> <Cronometer/> <List/></div>;
}

export default App;

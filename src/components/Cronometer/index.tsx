import { Button } from "../Button";
import Watch from "./Watch";
import styles from './cronometer.module.scss'

export default function Cronometer() {
  return (
    <div className={styles.cronometer}>
      <p className={styles.title}>Escolha um card e inicie o cronômetro</p>

      <div className={styles.watchWrapper}>
        <Watch />
      </div>

      <Button>Começar</Button>
    </div>
  );
}

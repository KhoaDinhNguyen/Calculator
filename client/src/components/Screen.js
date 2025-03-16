import styles from "../styles/Screen.module.css";
import "../styles/Root.css";

function Screen({ value, op }) {
  return (
    <div id={styles.screen}>
      <p className={styles.displayScreen}>{op}</p>
      <p className={styles.displayScreen}>{value}</p>
    </div>
  );
}

export default Screen;

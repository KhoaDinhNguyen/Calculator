import styles from "../styles/Screen.module.css";
import "../styles/Root.css";

function Screen({ currentValue, op, previousValue }) {
  return (
    <div id={styles.screen}>
      <div id={styles.currentScreen}>
        <p className={styles.displayScreen}>{op}</p>
        <p className={styles.displayScreen}>{currentValue}</p>
      </div>
      <div id={styles.previousScreen}>
        {previousValue == null && <p className={styles.displayScreen}>0</p>}
        {previousValue != null && (
          <p className={styles.displayScreen}>{previousValue}</p>
        )}
      </div>
    </div>
  );
}

export default Screen;

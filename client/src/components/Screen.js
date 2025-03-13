import styles from "../styles/Screen.module.css";
import "../styles/Root.css";

function Screen({ value, op }) {
  return (
    <div id={styles.screen}>
      <p>{op}</p>
      <p>{value}</p>
    </div>
  );
}

export default Screen;

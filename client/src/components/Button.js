import styles from "../styles/Button.module.css";

function Button(props) {
  const { children } = props;

  return <button className={styles.button}>{children}</button>;
}

export default Button;

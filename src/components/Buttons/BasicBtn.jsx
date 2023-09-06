import styles from "./btn.module.css";

function BasicBtn() {
  return (
    <div>
      <button className={`btn ${styles.btn}`}>PLAY NOW</button>
    </div>
  );
}

export default BasicBtn;

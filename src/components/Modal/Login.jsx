import styles from "./loginModal.module.css";
import Form from "react-bootstrap/Form";
// eslint-disable-next-line react/prop-types
function Login({ setLoginModal }) {
  return (
    <div className={styles.modalWrapper}>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-white">Login</h2>
        <button
          className={`btn`}
          style={{ background: "white", fontWeight: "bold" }}
          onClick={() => setLoginModal(false)}
        >
          X
        </button>
      </div>
      <Form>
        <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" className="my-3" placeholder="Email" />
          <Form.Control
            type="password"
            className="my-3"
            placeholder="Password"
          />
        </Form.Group>
      </Form>
      <button className={`btn ${styles.btn}`}>LOGIN</button>
    </div>
  );
}

export default Login;

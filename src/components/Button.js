import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, onClickEvent }) {
  return (
    <button className={styles.btn} onClick={onClickEvent}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func,
};

export default Button;

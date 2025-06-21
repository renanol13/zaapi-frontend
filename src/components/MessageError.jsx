import styles from "./MessageError.module.css";

const MessageError = ({ message }) => {
  return (
    <p
      className={`${styles.boxMessageError} ${
        message ? styles.show : undefined
      }`}
    >
        {message}
    </p>
  );
};

export default MessageError;

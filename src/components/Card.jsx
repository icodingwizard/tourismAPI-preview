import styles from "../styles/Card.module.css";

function Card(props) {
  return (
    <div className={styles.Card}>
      <div>
        <img src={props.image} alt="image" />
      </div>
      <div>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.popularity}>popularity : {props.popularity}</p>
      </div>
    </div>
  );
}

export default Card;

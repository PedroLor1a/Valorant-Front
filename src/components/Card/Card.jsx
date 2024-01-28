import styles from "./Card.module.css";

const Card = ({ name, img, role, description }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={img} alt={name} className={styles.img} />
      </div>
      <div className={styles.text}>
        <h3>Name: {name}</h3>
        <h3>Role: {role} </h3>
      </div>
    </div>
  );
};

export default Card;

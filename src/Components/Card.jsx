import styles from '../assets/Card.module.css';

function Card({ title, description }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>El nombre del libro es: {title}</h3>
      <p className={styles.cardDescription}>La descripción es: {description}</p>
    </div>
  );
}

export default Card;
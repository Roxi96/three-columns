import styles from "../components/Card.module.css";

interface CardsProps {
  color: string;
  url: string;
  title: string;
  text: string;
}
const Card = ({ color, url, title, text }: CardsProps) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.container}>
      <img src={url} alt="logo-sedan" />
      <h1>{title}</h1>
      <p className={styles.text}>{text}</p>
      <button
        className={styles.btn}
        style={Object.assign({ color: color }, styles.btn)} //asigna una propiedad a un objeto
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;

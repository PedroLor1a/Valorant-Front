import styles from "./Landing.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [noScroll, setNoScroll] = useState(true);

  useEffect(() => {
    // Agrega la clase al cuerpo al montar el componente
    document.body.style.overflow = noScroll ? "hidden" : "auto";

    // Limpia la clase al desmontar el componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [noScroll]);

  return (
    <div className={styles.container}>
      <h1 className={styles.tittle}>DataValo</h1>
      <div className={styles.button_borders}>
        <Link to="/home">
          <button className={styles.primary_button}> Go Home</button>
        </Link>
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');
      </style>
    </div>
  );
};

export default Landing;

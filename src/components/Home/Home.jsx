import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { allAgents } from "../../redux/action";
import { useEffect } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const agents = useSelector((state) => state.allAgents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAgents());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {agents.map((e) => {
          return (
            <Card
              key={e.uuid}
              name={e.displayName}
              img={e.fullPortrait}
              role={e.role?.displayName}
              description={e.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

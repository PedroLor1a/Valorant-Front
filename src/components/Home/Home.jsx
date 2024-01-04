import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { allAgents } from "../../redux/action";
import { useEffect, useState } from "react";

const Home = () => {
  const agents = useSelector((state) => state.allAgents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAgents());
  }, [dispatch]);

  return (
    <div>
      <div>
        {agents.map((e) => {
          return (
            <Card
              key={e.uuid}
              name={e.displayName}
              img={e.fullPortrait}
              role={e.role?.displayName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

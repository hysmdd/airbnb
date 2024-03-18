import React, { memo, useEffect, useState } from "react";
import dexRequest from "@/services";

const Home = memo(() => {
  const [highScore, setHighScore] = useState({});
  useEffect(() => {
    dexRequest.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
      setHighScore(res);
    });
  }, []);
  return (
    <div>
      <h1>{highScore.title}</h1>
      <h3>{highScore.subtitle}</h3>
      <ul>
        {highScore.list?.map((item, index) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;

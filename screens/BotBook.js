import React from "react";
import BotCard from "../components/BotCard";

function BotBook({ bots }) {
  const collection = bots.map((user, index) => {
    return <BotCard key={index} id={user} />;
  });

  return <div className="bg-hot-pink ">{collection}</div>;
}

export default BotBook;

import React from "react";

//import { bots } from "./bots";

function BotCard(props) {
  return (
    <div className="bg-light-pink dib br3 pa3 ma2 sw2 grow">
      <img
        src={`https://robohash.org/${props.id.name}`}
        alt="here is a bot"
        height={180}
        width={180}
      />
      <h3>{props.id.name}</h3>
      <p>{props.id.email}</p>
    </div>
  );
}

export default BotCard;

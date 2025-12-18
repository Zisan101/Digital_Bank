import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
   <RightCardContent id={props.id} img={props.img} tag={props.tag} intro={props.intro} />
  );
};

export default RightCard;

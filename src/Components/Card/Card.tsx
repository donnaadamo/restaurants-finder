import React from "react";
import { CardProps } from "../../Types/Types";

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;

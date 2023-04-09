import React from "react";
import { ButtonCustomProps } from "../../Types/Types";

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  description,
  className,
  handleClick,
  disabled,
}) => {
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {description}
    </button>
  );
};

export default ButtonCustom;

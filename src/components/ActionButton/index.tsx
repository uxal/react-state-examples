import React from "react";
import { ActionButton } from "./styled";

const Button: React.FC<IButtonProps> = ({
  selected,
  children,
  ...otherProps
}) => {
  return (
    <ActionButton selected={selected} {...otherProps}>
      {children}
    </ActionButton>
  );
};

interface IButtonProps {
  selected?: boolean;
  onClick: () => any;
}

export default Button;

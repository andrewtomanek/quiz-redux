import React from "react";

type Props = {
  disabled?: boolean;
  clicked: () => void;
  children: React.ReactNode;
};

const Button = ({ disabled, clicked, children }: Props) => {
  return (
    <button disabled={disabled} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;

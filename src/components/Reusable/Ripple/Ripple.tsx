import React, { ReactNode } from "react";
import Ripples from "react-ripples";

type RippleProps = {
  onClick?: () => void;
  duration?: number;
  children: ReactNode;
};

const Ripple: React.FC<RippleProps> = ({ onClick, duration = 1500, children }) => {
  return (
    <Ripples onClick={onClick} during={duration} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      {children}
    </Ripples>
  );
};

export default Ripple;
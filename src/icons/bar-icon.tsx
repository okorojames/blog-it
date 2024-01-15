import React from "react";

export const BarIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0,0,256,256"
      fill="#000000"
      className={className}
      onClick={onClick}
    >
      <g
        fill="#464040"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(8,8)">
          <path d="M8,5c-1.64497,0 -3,1.35503 -3,3c0,1.64497 1.35503,3 3,3h16c1.64497,0 3,-1.35503 3,-3c0,-1.64497 -1.35503,-3 -3,-3zM8,7h16c0.56503,0 1,0.43497 1,1c0,0.56503 -0.43497,1 -1,1h-16c-0.56503,0 -1,-0.43497 -1,-1c0,-0.56503 0.43497,-1 1,-1zM8,13c-1.64497,0 -3,1.35503 -3,3c0,1.64497 1.35503,3 3,3h16c1.64497,0 3,-1.35503 3,-3c0,-1.64497 -1.35503,-3 -3,-3zM8,15h16c0.56503,0 1,0.43497 1,1c0,0.56503 -0.43497,1 -1,1h-16c-0.56503,0 -1,-0.43497 -1,-1c0,-0.56503 0.43497,-1 1,-1zM8,21c-1.64497,0 -3,1.35503 -3,3c0,1.64497 1.35503,3 3,3h16c1.64497,0 3,-1.35503 3,-3c0,-1.64497 -1.35503,-3 -3,-3zM8,23h16c0.56503,0 1,0.43497 1,1c0,0.56503 -0.43497,1 -1,1h-16c-0.56503,0 -1,-0.43497 -1,-1c0,-0.56503 0.43497,-1 1,-1z"></path>
        </g>
      </g>
    </svg>
  );
};

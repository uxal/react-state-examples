import React from "react";

const Loader = (props: ILoaderProps) => {
  const { size, color, strokeWidth } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`-2 -1 ${38 + strokeWidth} ${38 + strokeWidth}`}
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth={strokeWidth}>
          <circle strokeOpacity=".25" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

const defaultProps = {
  color: "#1c73fb",
  size: 38,
  strokeWidth: 4
};

Loader.defaultProps = defaultProps;

interface ILoaderProps {
  color: string;
  size: number;
  strokeWidth: number;
}

export default Loader;

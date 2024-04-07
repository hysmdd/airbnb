import React, { memo } from "react";
import { styleStrToObj } from "./utils";

const IconTriangleArrowBottom = memo((props) => {
  const { width = 12, height = 12 } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={styleStrToObj(
        `height: ${height}px; width: ${width}px; display: block; fill: currentcolor;`
      )}
    >
      <path
        d="m23.85 6.86-11.5 11a .5.5 0 0 1 -.69 0l-11.5-11a .5.5 0 0 1 .34-.86h23a .5.5 0 0 1 .35.86z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
});

export default IconTriangleArrowBottom;

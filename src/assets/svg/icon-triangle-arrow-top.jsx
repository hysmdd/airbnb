import React, { memo } from "react";
import { styleStrToObj } from "./utils";

const IconTriangleArrowTop = memo((props) => {
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
        d="m23.96 17.69a.5.5 0 0 1 -.46.31h-23a .5.5 0 0 1 -.35-.86l11.5-11a .5.5 0 0 1 .69 0l11.5 11a .5.5 0 0 1 .12.55z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
});

export default IconTriangleArrowTop;

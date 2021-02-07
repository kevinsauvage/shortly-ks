import React from "react";
import "./Button.css";

const Button = ({ text, width, height, radius, fontSize, lineHeight }) => {
  return (
    <div
      className="button flex-jc-c-ai-c"
      style={{
        width: width,
        height: height,
        borderRadius: radius,
        fontSize: fontSize,
        lineHeight: lineHeight,
      }}>
      {text}
    </div>
  );
};

export default Button;

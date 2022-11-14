import React from "react";
import "./CrossAndCircle.css";

const Circle = () => {
  return (
    <React.Fragment>
      <div className="container">
        <svg className="circle" width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            strokeWidth="10"
            strokeDasharray="200"
            strokeDashoffset="200"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Circle;

import React from "react";
import "./CrossAndCircle.css";

const Cross = () => {
  return (
    <React.Fragment>
      <div className="cross">
        <svg className="line1" width="100" height="100">
          <path
            d="M 20 20 L 80 80"
            fill="none"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset="100"
          />
        </svg>
        <svg className="line2" height="100" width="100">
          <path
            d="M 80 20 L 20 80"
            fill="none"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset="100"
          />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Cross;

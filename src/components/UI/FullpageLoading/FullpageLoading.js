import React from "react";
import "./FullpageLoading.css";

export default function FullpageLoading() {
  return (
    <div className="Loader">
      <svg height="120" width="120">
        <circle r="52" cx="60" cy="60" stroke="white" fill="transparent" />
        Loading...
      </svg>
    </div>
  );
}

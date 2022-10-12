import React from "react";
import cls from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={cls.spinner}>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

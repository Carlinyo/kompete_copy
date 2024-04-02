import React from "react";
import CircleStyles from './index.module.scss'

interface ICircle {
  children: number | string;
}

const Circle: React.FC<ICircle> = ({ children }) => {
  return (
    <div className={CircleStyles.CircleContainer}>
      <img src="/images/circle.png" alt="" className={CircleStyles.CircleImage} />
      <div className={`${CircleStyles.Number} header-title`}>{children}</div>
    </div>
  );
};

export default Circle

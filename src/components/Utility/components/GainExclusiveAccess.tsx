import React from "react";
import { STEPS } from "../const.ts";
import Circle from "../../Circle/index.tsx";
import UtilityStyles from "../index.module.scss";
import { GAIN_EXCLUSIVE_ACCESS_TITLE_TEXTS } from '../const.ts'

const GainExclusiveAccess = () => {
  return (
    <div className={UtilityStyles.GainExclusiveAccessContainer}>
      <div className={UtilityStyles.GainExclusiveAccessTitleContainer}>
        <div className="White_Red_Title medium-title">
        {GAIN_EXCLUSIVE_ACCESS_TITLE_TEXTS.FIRST} <br /><span>{GAIN_EXCLUSIVE_ACCESS_TITLE_TEXTS.LAST}</span>
        </div>
        <img src="/images/line.png" alt="" />
      </div>
      <img src="/images/utility/Tokens/token4.png" alt="" className={UtilityStyles.token4} />
      <img src="/images/utility/Tokens/token5.png" alt="" className={UtilityStyles.token5} />
      <div className={UtilityStyles.GainExclusiveDetailsContainer}>
        <img src="/images/utility/GainExclusiveAccess/wheapon.png" alt="" className={UtilityStyles.Wheapon} />
        <div className={UtilityStyles.DetailsElements}>
          {STEPS?.map((el, index) => {
            return (
              <div className={UtilityStyles.StepContainer} key={index}>
                <Circle>{index + 1}</Circle>
                <div
                  className={`${UtilityStyles.CircleContainer} default-text`}
                >
                  {el.step}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GainExclusiveAccess;

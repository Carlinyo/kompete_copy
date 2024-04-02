import React from "react";
import Button from "../../Button/index.tsx";
import UtilityStyles from "../index.module.scss";
import { USE_KOMPETE_TEXTS, USE_KOMPETE_TITLE_TEXTS } from '../const.ts'

const UseKompete = () => {
  return (
    <div className={UtilityStyles.UseKompeteContainer}>
      <img src="/images/utility/useKompeteToken/images.png" alt="" className={UtilityStyles.MobileImage} />
      <div className={UtilityStyles.InfoContainer}>
        <div className={`${UtilityStyles.UseKompeteTitle} White_Red_Title medium-title`}>
          {USE_KOMPETE_TITLE_TEXTS.FIRST} <br /> <span>{USE_KOMPETE_TITLE_TEXTS.LAST}</span>
        </div>
        <div className={`${UtilityStyles.desc} default-text`}>
          {USE_KOMPETE_TEXTS.DESC}
        </div>
        <Button variant="red-button">{USE_KOMPETE_TEXTS.BTN_TEXT}</Button>
      </div>
      <img src="/images/utility/useKompeteToken/coin_wheapon.png" alt="" className={UtilityStyles.Image} />
    </div>
  );
};

export default UseKompete;

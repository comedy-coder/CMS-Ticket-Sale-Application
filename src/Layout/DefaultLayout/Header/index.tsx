import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import search from "~/assets/logo/Search.png";
import mail from "~/assets/logo/Email.png";
import bell from "~/assets/logo/Bell.png";
import avatar from "~/assets/logo/Avatar.png";
const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("search")}>
        <input placeholder="Search" />
        <button className={cx("search-btn")}>
          <img srcSet={`${search} 2x`} alt="" />
        </button>
      </div>
      <div className={cx("profile")}>
        <img srcSet={`${mail} 2x`} alt="" />
        <img srcSet={`${bell} 2x`} alt="" />
        <img srcSet={`${avatar} 2x`} alt="" />
      </div>
    </header>
  );
};

export default Header;

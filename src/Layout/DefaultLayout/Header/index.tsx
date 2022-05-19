import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Header = () => {
  return <header className={cx("wrapper")}>a</header>;
};

export default Header;

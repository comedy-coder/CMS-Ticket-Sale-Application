import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import logo from "~/assets/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import Home from "~/assets/logo/Home.png";
import Ticket from "~/assets/logo/Ticket.png";
import List from "~/assets/logo/List.png";
import Setting from "~/assets/logo/Setting.png";

const cx = classNames.bind(styles);
const navBarList = [
  {
    display: "Trang chủ",
    path: "/",
    img: Home,
  },
  {
    display: "Quản lý vé",
    path: "/ticket",
    img: Ticket,
  },
  {
    display: "Đối soát vé",
    path: "/ticketcheck",
    img: List,
  },
  {
    display: "Cài đặt",
    path: "/setting",
    img: Setting,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const activeNav = navBarList.findIndex((e) => e.path === pathname);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <img srcSet={`${logo} 2x`} alt="" />
      </div>
      <div className={cx("list")}>
        {navBarList.map((item, index) => (
          <Link
            to={item.path}
            className={cx(`${index === activeNav ? "active" : ""}`)}
            key={index}
          >
            <img srcSet={`${item.img} 2x`} alt="" />
            <span>{item.display}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

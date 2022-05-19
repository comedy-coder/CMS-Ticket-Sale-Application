import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import className from "classnames/bind";
type DefaultLayoutProp = {
  children?: React.ReactNode | null;
};
interface Props {
  children?: React.ReactNode | null;
}
const cx = className.bind(styles);
const DefaultLayout: React.FC<Props> = ({ children }: DefaultLayoutProp) => {
  return (
    <div>
      <div className={cx("wrapper")}>
        <Sidebar />
        <div>
          <Header />
          <div className={cx("context")}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;

import Header from "./Header";
import Sidebar from "./Sidebar";
type DefaultLayoutProp = {
  children?: React.ReactNode | null;
};
interface Props {
  children?: React.ReactNode | null;
}

const DefaultLayout: React.FC<Props> = ({ children }: DefaultLayoutProp) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;

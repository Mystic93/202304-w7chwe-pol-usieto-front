import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled className="container">
      <h1>Social network</h1>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;

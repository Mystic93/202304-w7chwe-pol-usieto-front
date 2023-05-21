import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <>
      <h1>Social network</h1>
      <Outlet />
    </>
  );
};

export default Layout;

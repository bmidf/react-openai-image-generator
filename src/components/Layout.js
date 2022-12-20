import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

const Layout = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();

  return (
    <>
      {!hideHeaderPaths.includes(pathname) && <Header />}
      <Outlet />
    </>
  );
}
export default Layout;
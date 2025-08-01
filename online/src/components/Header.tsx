import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const selectedKey = location.pathname === "/" ? "/" : location.pathname.startsWith("/courses") ? "/courses" : location.pathname;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <Menu mode="horizontal" selectedKeys={[selectedKey]}>
          <Menu.Item key="/">
  <Link to="/">Home</Link>
</Menu.Item>
<Menu.Item key="/courses">
  <Link to="/courses">Courses</Link>
</Menu.Item>
<Menu.Item key="/progress">
  <Link to="/profile">My Learning</Link>
</Menu.Item>

        </Menu>
      </div>
    </header>
  );
};

export default Header;

import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Users",
      name: "Users",
      icon: <FaUserAlt />,
    },
    {
      path: "/Payloads",
      name: "Payloads",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Tasks",
      name: "Tasks",
      icon: <FaCommentAlt />,
    },
    {
      path: "/Graphs",
      name: "Graphs",
      icon: <FaShoppingBag />,
    },
    {
      path: "/Guide",
      name: "Guide",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="lower">
      <div className="sidebar">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

import React, { useState, type JSX } from "react";
import "./sidebar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "../../assets/logo.png";

interface MenuItem {
  label: string;
  icon: JSX.Element;
  type?: "select";
  options?: string[];
}

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onItemClick: () => void;
}

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  {
    label: "User Management",
    icon: <ManageAccountsIcon />,
    type: "select",
    options: ["Create User", "View User"],
  },
  {
    label: "Role Management",
    icon: <ManageAccountsIcon />,
    type: "select",
    options: ["Create Role", "View Role"],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, isMobile, onItemClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`sidebar ${isOpen ? "open" : "closed"} ${
        isMobile ? "mobile" : "desktop"
      }`}
    >
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Shopify</h1>
      </div>

      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="menu-header"
              onClick={() => {
                toggleDropdown(index);
                onItemClick(); // close on mobile click
              }}
            >
              <div className="menu-label">
                {item.icon}
                <span>{item.label}</span>
              </div>

              {item.type === "select" && (
                <KeyboardArrowDownIcon
                  className={`arrow ${openIndex === index ? "rotate" : ""}`}
                />
              )}
            </div>

            {item.type === "select" && (
              <ul
                className="dropdown"
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${(item.options?.length || 0) * 40}px`
                      : "0px",
                }}
              >
                {item.options?.map((opt, i) => (
                  <li
                    key={i}
                    className="dropdown-item"
                    onClick={onItemClick} // close after submenu click
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

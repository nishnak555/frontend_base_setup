import { Outlet } from "react-router";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";
import "./adminLayout.css";
import { useState, useEffect } from "react";

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 992);

  // Detect screen width for mobile mode
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close Sidebar automatically on mobile
  const handleSidebarItemClick = () => {
    if (isMobile) setIsSidebarOpen(false);
  };

  return (
    <div
      className={`admin-layout ${
        isSidebarOpen ? "sidebar-open" : "sidebar-closed"
      } ${isMobile ? "mobile-view" : "desktop-view"}`}
    >
      <Sidebar
        isOpen={isSidebarOpen}
        onItemClick={handleSidebarItemClick}
        isMobile={isMobile}
      />
      <div className="admin-main">
        <Header onClick={toggleSidebar} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

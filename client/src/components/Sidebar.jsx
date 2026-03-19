import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ChevronDown,
  ChevronRight,
  Users,
  MapPin,
  Building2,
  Boxes,
  Layers,
  Tag,
  Truck,
  LifeBuoy,
  Menu,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },

  {
    name: "Admin",
    icon: Layers,
    children: [
      { name: "User Account", path: "/admin/user-account", icon: Users },
      { name: "Roles & Permissions", path: "/admin/roles", icon: Users },
      { name: "Location", path: "/admin/location", icon: MapPin },
      { name: "Sub Location", path: "/admin/sub-location", icon: MapPin },
      { name: "Department", path: "/admin/department", icon: Building2 },
      {
        name: "Sub Department",
        path: "/admin/sub-department",
        icon: Building2,
      },
      {
        name: "Asset Categories",
        path: "/admin/asset-categories",
        icon: Boxes,
      },
      { name: "Sub Categories", path: "/admin/sub-categories", icon: Boxes },
      { name: "Asset Types", path: "/admin/asset-types", icon: Tag },
      { name: "Vendor", path: "/admin/vendor", icon: Truck },
      { name: "Support Group", path: "/admin/support-group", icon: LifeBuoy },
    ],
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`h-screen ${
        collapsed ? "w-20" : "w-64"
      } bg-[#0b1220] border-r border-white/5 text-gray-400 px-3 py-6 flex flex-col transition-all duration-300`}
    >
      {/* Top Section */}
      <div
        className={`flex items-center mb-10 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!collapsed && (
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <h1 className="text-white font-semibold text-base tracking-wide">
              Asset
            </h1>
          </div>
        )}

        <Menu
          size={20}
          className="cursor-pointer text-gray-300 hover:text-white transition"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isOpen = openMenu === item.name;

          return (
            <div key={index}>
              {/* Parent */}
              <div
                onClick={() => {
                  if (item.children) {
                    toggleMenu(item.name);
                  } else {
                    navigate(item.path);
                  }
                }}
                className={`flex items-center ${
                  collapsed ? "justify-center px-0" : "justify-between px-3"
                } py-2.5 rounded-xl cursor-pointer transition-all duration-200 group relative
${
  isActive(item.path)
    ? "bg-white/10 text-white shadow-sm"
    : "hover:bg-white/5 hover:text-white"
}`}
              >
                <div
                  className={`flex items-center ${
                    collapsed ? "justify-center w-full" : "gap-3"
                  }`}
                >
                  <Icon size={collapsed ? 20 : 18} />
                  {!collapsed && (
                    <span className="text-sm font-medium">{item.name}</span>
                  )}
                </div>

                {/* Dropdown Arrow */}
                {!collapsed &&
                  item.children &&
                  (isOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  ))}

                {/* Tooltip (collapsed mode) */}
                {collapsed && (
                  <span className="absolute left-20 bg-black/90 backdrop-blur px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </div>

              {/* Children */}
              {item.children && isOpen && !collapsed && (
                <div className="ml-6 mt-1 flex flex-col gap-1">
                  {item.children.map((child, i) => {
                    const ChildIcon = child.icon;

                    return (
                      <div
                        key={i}
                        onClick={() => navigate(child.path)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer text-sm transition
${
  isActive(child.path)
    ? "bg-white/10 text-white"
    : "hover:bg-white/5 hover:text-white"
}`}
                      >
                        <ChildIcon size={16} />
                        <span>{child.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

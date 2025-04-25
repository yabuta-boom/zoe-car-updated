import React from 'react';
import { 
  Car, 
  MessageSquare, 
  Users, 
  Settings, 
  Calendar, 
  BarChart,
  FileText,
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
  LogOut
} from 'lucide-react';
import { useState } from 'react';

const AdminSidebar = ({ setActivePage }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Sidebar navigation items
  const navItems = [
    { name: 'Dashboard', icon: BarChart, page: 'dashboard' },
    { name: 'Inventory', icon: Car, page: 'inventory' },
    { name: 'Inbox', icon: MessageSquare, page: 'inbox' }, // New Inbox Page
    { name: 'Customers', icon: Users, page: 'customers' },
    { name: 'Orders', icon: ShoppingCart, page: 'orders' },
    { name: 'Appointments', icon: Calendar, page: 'appointments' },
    { name: 'Reports', icon: FileText, page: 'reports' },
    { name: 'Settings', icon: Settings, page: 'settings' },
  ];

  // Handle Logout
  const handleLogout = () => {
    // Clear any authentication tokens or session data here if applicable
    window.location.href = '/admin/login'; // Redirect to the login page
  };

  return (
    <aside 
      className={`bg-primary-800 text-white transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className={`py-6 px-4 border-b border-primary-700 flex items-center ${
        collapsed ? 'justify-center' : 'justify-between'
      }`}>
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <Car size={28} className="text-secondary-400" />
            <span className="text-lg font-semibold">Admin Panel</span>
          </div>
        )}
        {collapsed && (
          <Car size={28} className="text-secondary-400" />
        )}
        
        {/* Collapse toggle */}
        <button 
          className={`p-1 rounded-full hover:bg-primary-700 ${collapsed ? 'ml-0' : 'ml-2'}`}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight size={20} className="text-neutral-300" />
          ) : (
            <ChevronLeft size={20} className="text-neutral-300" />
          )}
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActivePage(item.page)}
                className={`flex items-center py-3 px-4 w-full ${
                  collapsed ? 'justify-center' : 'space-x-3'
                } text-neutral-300 hover:bg-primary-700 hover:text-white transition-colors duration-200`}
              >
                <item.icon size={collapsed ? 24 : 20} />
                {!collapsed && <span>{item.name}</span>}
              </button>
            </li>
          ))}

          {/* Logout Button */}
          <li>
            <button
              onClick={handleLogout}
              className={`flex items-center py-3 px-4 w-full ${
                collapsed ? 'justify-center' : 'space-x-3'
              } text-neutral-300 hover:bg-primary-700 hover:text-white transition-colors duration-200`}
            >
              <LogOut size={collapsed ? 24 : 20} />
              {!collapsed && <span>Logout</span>}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
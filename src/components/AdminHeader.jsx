import React from 'react';
import { Bell, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminHeader = () => {
  const { currentUser, logout } = useAuth();
  
  return (
    <header className="bg-white border-b border-neutral-200 h-16 flex items-center justify-between px-6">
      {/* Left side - Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
        </div>
      </div>
      
      {/* Right side - User info and actions */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button className="relative p-1 rounded-full hover:bg-neutral-100 transition-colors duration-200">
          <Bell size={20} className="text-neutral-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        {/* User info */}
        <div className="flex items-center space-x-3">
          <div className="bg-primary-100 rounded-full p-2">
            <User size={20} className="text-primary-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-800">{currentUser?.username || 'Admin'}</p>
            <p className="text-xs text-neutral-500">{currentUser?.role || 'Administrator'}</p>
          </div>
        </div>
        
        {/* Logout */}
        <button 
          className="p-1 rounded-full hover:bg-neutral-100 transition-colors duration-200"
          onClick={logout}
        >
          <LogOut size={20} className="text-neutral-600" />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
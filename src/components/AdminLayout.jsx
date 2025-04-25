import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminInventoryPage from '../pages/AdminInventoryPage';
import AdminInboxPage from '../pages/AdminInboxPage';

const AdminLayout = ({ messages }) => {
  const [activePage, setActivePage] = useState('dashboard'); // Track the active page

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar setActivePage={setActivePage} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 overflow-y-auto">
        {activePage === 'dashboard' && (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard</h1>
            <p className="mt-4">Manage your inventory, customers, orders, and more.</p>
          </div>
        )}
        {activePage === 'inventory' && (
          <div className="p-6 mx-auto" style={{ maxWidth: '50%' }}>
            <AdminInventoryPage />
          </div>
        )}
        {activePage === 'inbox' && <AdminInboxPage messages={messages} />}
      </div>
    </div>
  );
};

export default AdminLayout;
import React, { useState } from 'react';
import { Car, Users, DollarSign, Calendar, ArrowUp, ArrowDown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MessageList from '../components/MessageList';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Dashboard stats (sample data)
  const stats = [
    {
      title: 'Total Inventory',
      value: 47,
      icon: Car,
      change: 3,
      changeType: 'increase',
      color: 'bg-blue-500'
    },
    {
      title: 'New Messages',
      value: 12,
      icon: Users,
      change: 8,
      changeType: 'increase',
      color: 'bg-green-500'
    },
    {
      title: 'Monthly Sales',
      value: '$324,500',
      icon: DollarSign,
      change: 5.2,
      changeType: 'decrease',
      color: 'bg-purple-500'
    },
    {
      title: 'Appointments',
      value: 8,
      icon: Calendar,
      change: 2,
      changeType: 'increase',
      color: 'bg-orange-500'
    }
  ];

  // Sample messages
  const messages = [
    { id: 1, name: 'John Doe', message: 'Interested in the BMW 7 Series.', date: '2025-04-20' },
    { id: 2, name: 'Jane Smith', message: 'Looking for financing options.', date: '2025-04-21' },
    { id: 3, name: 'Emily Johnson', message: 'Scheduled a test drive for Audi RS e-tron GT.', date: '2025-04-22' }
  ];

  // Handle Logout
  const handleLogout = () => {
    // Clear any authentication tokens or session data here (if applicable)
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header with Logout */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </header>

      {/* Dashboard Stats */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`p-4 rounded-lg shadow ${stat.color} text-white`}>
              <div className="flex items-center justify-between">
                <stat.icon size={32} />
                <div className="text-right">
                  <h2 className="text-lg font-semibold">{stat.title}</h2>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.changeType === 'increase' ? (
                  <ArrowUp size={16} className="text-green-300 mr-2" />
                ) : (
                  <ArrowDown size={16} className="text-red-300 mr-2" />
                )}
                <span className="text-sm">
                  {stat.changeType === 'increase' ? 'Increased' : 'Decreased'} by {stat.change}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Messages Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Messages</h2>
        <MessageList messages={messages} />
      </section>
    </div>
  );
};

export default AdminDashboard;
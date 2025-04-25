import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

const AdminInboxPage = ({ messages }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Inbox</h1>
      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <div className="flex items-center space-x-3 mb-2">
                <User size={20} className="text-primary-600" />
                <h2 className="text-lg font-semibold">{message.name}</h2>
              </div>
              {message.email && (
                <div className="flex items-center space-x-3 mb-2">
                  <Mail size={20} className="text-primary-600" />
                  <p className="text-sm text-gray-600">{message.email}</p>
                </div>
              )}
              {message.phone && (
                <div className="flex items-center space-x-3 mb-2">
                  <Phone size={20} className="text-primary-600" />
                  <p className="text-sm text-gray-600">{message.phone}</p>
                </div>
              )}
              <div className="mt-2">
                <p className="text-gray-800">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminInboxPage;
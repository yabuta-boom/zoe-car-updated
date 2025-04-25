import React, { useState, useEffect } from 'react';
import { 
  MoreHorizontal, 
  Mail, 
  Check, 
  Archive, 
  RefreshCw, 
  Trash2, 
  Filter 
} from 'lucide-react';
import { toast } from 'react-toastify';
import apiService from '../services/api';

const MessageList = ({ messages }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {messages.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {messages.map((message) => (
            <li key={message.id} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{message.name}</h3>
                  <p className="text-sm text-gray-600">{message.message}</p>
                </div>
                <span className="text-sm text-gray-500">{message.date}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No messages available.</p>
      )}
    </div>
  );
};

export default MessageList;
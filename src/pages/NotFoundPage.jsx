import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-neutral-50">
      <Car size={80} className="text-primary-600 mb-6" />
      <h1 className="text-6xl font-display font-bold text-primary-800 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-neutral-800 mb-4">Page Not Found</h2>
      <p className="text-neutral-600 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary inline-flex items-center">
        <ArrowLeft size={18} className="mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Volunteer Management System</h1>
          <p className="text-xl mb-8">Efficiently manage your volunteers and make a difference in your community</p>
          <Link
            to="/volunteers"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-2xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Volunteer Management</h3>
            <p className="text-gray-600">Easily add, edit, and manage volunteer information</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-2xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Status Tracking</h3>
            <p className="text-gray-600">Monitor volunteer status and engagement levels</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-2xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
            <p className="text-gray-600">Protected data and user authentication</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Link
            to="/volunteers/new"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-green-600 text-2xl mb-4">➕</div>
            <h3 className="text-xl font-semibold mb-2">Add New Volunteer</h3>
            <p className="text-gray-600">Register a new volunteer in the system</p>
          </Link>
          <Link
            to="/volunteers"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-blue-600 text-2xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">View Volunteers</h3>
            <p className="text-gray-600">See all registered volunteers</p>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
          <p className="text-gray-600 mb-8">
            Contact our support team for assistance with the Volunteer Management System
          </p>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 
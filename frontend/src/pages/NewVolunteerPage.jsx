import React from 'react';
import { Link } from 'react-router-dom';
import VolunteerForm from '../components/VolunteerForm';

const NewVolunteerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Add New Volunteer</h1>
              <p className="mt-1 text-sm text-gray-600">
                Fill out the form below to register a new volunteer
              </p>
            </div>
            <Link
              to="/volunteers"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Back to Volunteers
            </Link>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-8">
        <VolunteerForm />
      </div>
    </div>
  );
};

export default NewVolunteerPage; 
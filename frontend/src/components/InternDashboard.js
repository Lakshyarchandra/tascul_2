import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Authcontext'; // Import AuthContext to access user data
import axios from 'axios';

const InternDashboard = () => {
  const { user } = useContext(AuthContext); // Access the user from AuthContext
  const [internshipDetails, setInternshipDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [assessments, setAssessments] = useState([]);
  const [completedAssessments, setCompletedAssessments] = useState([]);
  const [review, setReview] = useState('');
  const [activeSection, setActiveSection] = useState('personal'); // Track active sidebar section

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Retrieve token from localStorage

    if (token) {
      axios
        .get('http://localhost:5000/api/intern/details', {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        })
        .then((response) => {
          setInternshipDetails(response.data);
          const assessmentList = response.data.assessments.split(';').map((assessment, index) => ({
            id: index + 1,
            description: assessment.trim(),
          }));
          setAssessments(assessmentList);
        })
        .catch((err) => {
          console.error('Error fetching internship details:', err.response?.data || err.message);
          setError('Error fetching internship details. Please check your credentials or try again later.');
        })
        .finally(() => {
          setLoading(false); // End loading state
        });
    } else {
      setError('No token found. Please log in.');
      setLoading(false);
    }
  }, []);

  const handleMarkComplete = (taskIndex) => {
    setCompletedAssessments((prev) => [...prev, taskIndex]);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handlePostReview = () => {
    const token = localStorage.getItem('authToken'); // Retrieve token from localStorage

    if (!review.trim()) {
      alert('Review cannot be empty.');
      return;
    }

    axios
      .post(
        'http://localhost:5000/api/intern/reviews',
        { review, name: internshipDetails.name }, // Include the name in the review payload
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert('Review posted successfully!');
        setReview('');
      })
      .catch((err) => {
        console.error('Error posting review:', err.response?.data || err.message);
        alert('Failed to post review. Please try again.');
      });
  };

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-white text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Welcome, {user ? user.name : 'Loading...'}!</h2>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => setActiveSection('personal')}
            className={`w-full py-2 px-4 rounded-md ${activeSection === 'personal' ? 'bg-blue-600' : 'bg-blue-500'} hover:bg-blue-600 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none`}
          >
            Personal Information
          </button>
          <button
            onClick={() => setActiveSection('internship')}
            className={`w-full py-2 px-4 rounded-md ${activeSection === 'internship' ? 'bg-blue-600' : 'bg-blue-500'} hover:bg-blue-600 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none`}
          >
            Internship Details
          </button>
          <button
            onClick={() => setActiveSection('review')}
            className={`w-full py-2 px-4 rounded-md ${activeSection === 'review' ? 'bg-blue-600' : 'bg-blue-500'} hover:bg-blue-600 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none`}
          >
            Post Review
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-8">
        {activeSection === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <p>Name: {internshipDetails.name}</p>
              <p>Domain: {internshipDetails.domain}</p>
              <p>Email: {internshipDetails.email}</p>
            </div>
          </div>
        )}

        {activeSection === 'internship' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Internship Details</h2>
            <p>Candidate Serial Number: {internshipDetails.candidate_serial}</p>
            <p>Role: {internshipDetails.role}</p>
            <p>Duration: {internshipDetails.duration}</p>
            <h3 className="text-lg font-semibold mt-4">Assessments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {assessments.length > 0 ? (
                assessments.map((assessment, index) => (
                  <div
                    key={assessment.id}
                    className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col justify-between min-h-[200px] hover:bg-gray-600 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    <div className="flex flex-col flex-grow">
                      <h4 className="text-lg font-semibold mb-4">{`Assessment ${assessment.id}: ${assessment.description}`}</h4>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <button
                        onClick={() => handleMarkComplete(index)}
                        className={`py-2 px-4 rounded-md ${completedAssessments.includes(index)
                            ? 'bg-green-500'
                            : 'bg-yellow-500'} hover:bg-opacity-80 focus:outline-none transform hover:scale-105 transition-transform duration-300 ease-in-out`}
                      >
                        {completedAssessments.includes(index) ? 'Completed' : 'Mark as Complete'}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No assessments available.</p>
              )}
            </div>
          </div>
        )}

        {activeSection === 'review' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Post a Review</h2>
            <textarea
              value={review}
              onChange={handleReviewChange}
              placeholder="Write your review here..."
              rows="4"
              className="w-full p-4 bg-gray-700 text-white rounded-md border-2 border-gray-600 focus:outline-none"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={handlePostReview}
                className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none"
              >
                Post Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternDashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('viewProjects');
  const [projects, setProjects] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    thumbnail: '',
    description: '',
    liveLink: '',
    githubLink: '',
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    fetchProjects();
    fetchReviews();
  }, []);

  const fetchProjects = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get('http://localhost:5000/api/admin/projects', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(response.data);
    } catch (err) {
      console.error('Error fetching projects:', err.message);
    }
  };

  const fetchReviews = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get('http://localhost:5000/api/admin/reviews', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReviews(response.data);
    } catch (err) {
      console.error('Error fetching reviews:', err.message);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      await axios.post('http://localhost:5000/api/admin/projects', newProject, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProjects();
      setNewProject({ title: '', thumbnail: '', description: '', liveLink: '', githubLink: '' });
      alert('Project added successfully!');
    } catch (err) {
      console.error('Error adding project:', err.message);
      alert('Failed to add project.');
    }
  };

  const handleReviewAction = async (id, action) => {
    const token = localStorage.getItem('authToken');
    try {
      if (action === 'accept') {
        await axios.patch(`http://localhost:5000/api/admin/reviews/${id}`, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else if (action === 'reject') {
        await axios.delete(`http://localhost:5000/api/admin/reviews/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      fetchReviews();
    } catch (err) {
      console.error(`Error performing ${action} action:`, err.message);
      alert(`Failed to ${action} review.`);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row">
      <div
        className={`lg:w-64 w-full bg-gray-800 p-6 ${sidebarVisible ? 'block' : 'hidden'} lg:block`}
      >
        <h2 className="text-2xl font-semibold">Welcome, Admin!</h2>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => setActiveSection('viewProjects')}
            className={`w-full py-2 px-4 rounded-md ${activeSection === 'viewProjects' ? 'bg-blue-600' : 'bg-blue-500'} hover:bg-blue-600`}
          >
            View Projects
          </button>
          <button
            onClick={() => setActiveSection('addProjects')}
            className={`w-full py-2 px-4 rounded-md ${activeSection === 'addProjects' ? 'bg-blue-600' : 'bg-blue-500'} hover:bg-blue-600`}
          >
            Add Projects
          </button>
          <button
            onClick={() => setActiveSection('manageReviews')}
            className={`w-full py-2 px-4 rounded-md ${activeSection === 'manageReviews' ? 'bg-blue-600' : 'bg-blue-500'} hover:bg-blue-600`}
          >
            Manage Reviews
          </button>
        </div>
      </div>

      <div className="lg:hidden p-4">
        <button
          onClick={() => setSidebarVisible(!sidebarVisible)}
          className="text-white text-3xl"
        >
          {sidebarVisible ? '×' : '☰'}
        </button>
      </div>

      <div className="flex-1 p-8 space-y-8">
        {activeSection === 'viewProjects' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-40 object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              ))}
            </div>

            {selectedProject && (
              <div className="mt-8 bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                <p className="mt-4 text-gray-300">{selectedProject.description}</p>
                <div className="mt-4">
                  <p className="text-gray-400">
                    <strong>Live Demo:</strong> 
                    <a href={selectedProject.live_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {selectedProject.live_link}
                    </a>
                  </p>
                  <p className="text-gray-400">
                    <strong>GitHub:</strong> 
                    <a href={selectedProject.github_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {selectedProject.github_link}
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeSection === 'addProjects' && (
          <form onSubmit={handleAddProject} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Project</h2>
            <input
              type="text"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              placeholder="Project Title"
              className="w-full mb-4 p-2 rounded bg-black text-white"
              required
            />
            <input
              type="text"
              value={newProject.thumbnail}
              onChange={(e) => setNewProject({ ...newProject, thumbnail: e.target.value })}
              placeholder="Thumbnail URL"
              className="w-full mb-4 p-2 rounded bg-black text-white"
              required
            />
            <textarea
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              placeholder="Description"
              rows="4"
              className="w-full mb-4 p-2 rounded bg-black text-white"
              required
            />
            <input
              type="url"
              value={newProject.liveLink}
              onChange={(e) => setNewProject({ ...newProject, liveLink: e.target.value })}
              placeholder="Live Link"
              className="w-full mb-4 p-2 rounded bg-black text-white"
              required
            />
            <input
              type="url"
              value={newProject.githubLink}
              onChange={(e) => setNewProject({ ...newProject, githubLink: e.target.value })}
              placeholder="GitHub Link"
              className="w-full mb-4 p-2 rounded bg-black text-white"
              required
            />
            <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded">
              Add Project
            </button>
          </form>
        )}

        {activeSection === 'manageReviews' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Reviews</h2>
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-800 p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold">{review.title}</h3>
                <p className="mt-2 text-gray-300">{review.comment}</p>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => handleReviewAction(review.id, 'accept')}
                    className="py-2 px-4 bg-green-600 text-white rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReviewAction(review.id, 'reject')}
                    className="py-2 px-4 bg-red-600 text-white rounded"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

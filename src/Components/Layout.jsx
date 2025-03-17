import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Features/Auth/AuthAction';

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate('/login');
  };

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: '📊' },
    { path: '/course', name: 'Courses', icon: '📚' },
    { path: '/assignments', name: 'Assignments', icon: '📝' },
    { path: '/progress', name: 'Progress', icon: '📈' },
    { path: '/settings', name: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex relative">
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`${
          isMobile ? 'fixed' : 'relative'
        } bg-gray-800 text-white ${!isMobile && !isSidebarOpen ? 'w-16' : 'w-64'} min-h-screen flex flex-col transition-all duration-300 z-30 ${
          isMobile ? (isSidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
        }`}
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-700">
          <Link to="/dashboard" className="text-xl font-bold text-green-400 flex items-center space-x-2">
            {!isMobile && !isSidebarOpen ? (
              <span>CX</span>
            ) : (
              <span>CodeX</span>
            )}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className={`px-4 mb-6 ${!isMobile && !isSidebarOpen ? 'hidden' : ''}`}>
            <div className="bg-gray-700 rounded-lg p-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center">
                  👤
                </div>
                <div>
                  <div className="text-sm font-medium">User Name</div>
                  <div className="text-xs text-gray-400">Student</div>
                </div>
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => isMobile && setSidebarOpen(false)}
              className={`flex items-center ${!isMobile && !isSidebarOpen ? 'justify-center' : ''} space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors ${
                location.pathname === item.path ? 'bg-gray-700 text-white' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {(isSidebarOpen || isMobile) && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout Section */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center ${!isMobile && !isSidebarOpen ? 'justify-center' : ''} space-x-3 px-4 py-2 text-red-400 hover:bg-red-400 hover:text-white rounded-lg transition-colors`}
          >
            <span>🚪</span>
            {(isSidebarOpen || isMobile) && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-2xl hover:text-green-400 transition-colors"
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-full" aria-label="Notifications">🔔</button>
            <button className="p-2 hover:bg-gray-700 rounded-full" aria-label="Messages">💬</button>
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-4 md:p-6 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 
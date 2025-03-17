import React from 'react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your dashboard content here */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
          <p className="text-gray-300">This is your dashboard. More features coming soon.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 
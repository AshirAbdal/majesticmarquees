import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-800">Majestic Marquees</h1>
          <p className="text-xs text-gray-400">Admin Panel</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-500 hover:text-gray-800 transition"
        >
          Sign out
        </button>
      </header>

      {/* Main */}
      <main className="p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Enquiries", value: "0" },
            { label: "Active Bookings", value: "0" },
            { label: "Pending Quotes", value: "0" },
            { label: "Completed Events", value: "0" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-base font-semibold text-gray-700 mb-4">Recent Enquiries</h3>
          <p className="text-sm text-gray-400">No enquiries yet.</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
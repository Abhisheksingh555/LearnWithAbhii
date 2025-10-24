import "remixicon/fonts/remixicon.css";

export default function Sidebar() {
  const menuItems = [
    { icon: "ri-home-2-line", label: "Home" },
    { icon: "ri-folder-2-line", label: "Project" },
    { icon: "ri-task-line", label: "Task" },
    { icon: "ri-team-line", label: "Team" },
    { icon: "ri-line-chart-fill", label: "Report" },
  ];

  return (
    <aside className="h-screen w-1/5 shadow-lg flex flex-col border-r border-gray-200">

      <div className="flex items-center gap-3 px-6 py-8 text-3xl font-extrabold text-gray-800 border-b border-gray-200">
        <i className="ri-verified-badge-fill text-blue-600"></i>
        <p>TaskMaster</p>
      </div>

      <ul className="flex flex-col mt-10 gap-4 text-lg text-gray-700 px-8">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 transition-all duration-200"
          >
            <i className={`${item.icon} text-2xl`}></i>
            <span className="font-medium">{item.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto mb-6 px-6">
        <button className="flex items-center gap-3 text-lg font-semibold text-gray-700 hover:text-red-600 transition-all duration-200">
          <i className="ri-logout-box-r-line text-2xl"></i>
          Logout
        </button>
      </div>
      
    </aside>
  );
}

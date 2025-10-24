const projects = [
  { name: "Website Redesign", dueDate: "2023-10-26", status: "In Planning" },
  { name: "Mobile App Dev", dueDate: "", status: "In Planning" },
  { name: "Database Migration", dueDate: "", status: "Completed" },
  { name: "Marketing Campaign", dueDate: "2023-11-15", status: "Pending" },
];

const getStatusInfo = (status) => {
  switch (status) {
    case "Completed":
      return { color: "bg-green-500", label: "Completed" };
    case "In Planning":
      return { color: "bg-yellow-400", label: "In Planning" };
    case "Pending":
      return { color: "bg-blue-500", label: "Pending" };
    default:
      return { color: "bg-gray-400", label: "Unknown" };
  }
};

export default function RecentProject() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md flex-1 min-w-[350px]">
      <h3 className="text-lg font-semibold mb-4 inline-block border-b-2 border-blue-500 pb-1">
        Recent Projects
      </h3>

      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="text-left text-gray-500 font-normal text-sm pb-1">
              Project Name
            </th>
            <th className="text-left text-gray-500 font-normal text-sm pb-1">
              Due Date
            </th>
            <th className="text-left text-gray-500 font-normal text-sm pb-1">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            const statusInfo = getStatusInfo(project.status);
            return (
              <tr key={index} className="bg-white rounded-md shadow-sm">
                <td className="font-medium py-2">{project.name}</td>
                <td className="text-sm text-gray-500 py-2">
                  {project.dueDate || "N/A"}
                </td>
                <td className="flex items-center py-2">
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${statusInfo.color}`}
                  ></span>
                  <span className="text-sm text-gray-500">{statusInfo.label}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

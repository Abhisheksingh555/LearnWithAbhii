const CircularProgressBar = ({
  percentage,
  completedColor = "#3b82f6",
  pendingColor = "#D1E5FD",
  size = 150,
  strokeWidth = 12,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex justify-center my-5">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90 overflow-visible"
      >
        <circle
          stroke={pendingColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="transition-all duration-300"
        />
        <circle
          stroke={completedColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="transition-all duration-300 stroke-current"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-current text-gray-800 font-bold text-2xl transform rotate-90"
        >
          {percentage}%
        </text>
        <text
          x="50%"
          y="65%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-gray-500 text-sm transform rotate-90"
        >
          Completed
        </text>
      </svg>
    </div>
  );
};

const TaskCompilation = ({ completed = 75 }) => {
  const completedColor = "#3b82f6";
  const pendingColor = "#D1E5FD";

  return (
    <div className="bg-white rounded-lg p-6 shadow-md flex-1 min-w-[250px]">
      <h3 className="text-lg font-semibold mb-4">Task Completion</h3>
      <CircularProgressBar
        percentage={completed}
        completedColor={completedColor}
        pendingColor={pendingColor}
        size={150}
        strokeWidth={15}
      />
      <div className="flex justify-center mt-5 space-x-6">
        <div className="flex items-center space-x-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: completedColor }}
          ></span>
          <span className="text-sm text-gray-500">Completed</span>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: pendingColor }}
          ></span>
          <span className="text-sm text-gray-500">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCompilation;

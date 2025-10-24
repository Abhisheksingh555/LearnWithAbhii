import React, { useState } from "react";

export default function ToggleText() {
  const [visible, setVisible] = useState(false);

  const toggleText = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={toggleText}
        className="px-6 py-3 mb-6 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
      >
        {visible ? "Hide Text" : "Show Text"}
      </button>

      <p
        className={`text-lg text-gray-800 transition-all duration-500 ease-in-out ${
          visible ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        This is the text you can toggle visibility for! It smoothly appears and
        disappears.
      </p>
    </div>
  );
}

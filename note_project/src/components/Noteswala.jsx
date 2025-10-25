import React from "react";

export default function Noteswala() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-6">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8 flex gap-8 items-start">
          {/* Left Side - Input Section */}
          <div className="flex-1 space-y-5">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              📝 NotesWala
            </h1>

            <input
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700 placeholder-gray-400"
              type="text"
              placeholder="Enter your topic..."
            />

            <textarea
              className="w-full h-48 border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700 placeholder-gray-400"
              placeholder="Write your notes here..."
            ></textarea>

            <button className="w-full bg-yellow-400 text-gray-800 font-semibold py-3 rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-md">
              Save Note
            </button>
          </div>

          {/* Right Side - Decorative Image */}
          <div className="hidden md:flex justify-center items-center w-1/3">
            <img
              src="https://pngimg.com/d/sticky_note_PNG18952.png"
              alt="Sticky Note"
              className="w-48 drop-shadow-xl transform hover:rotate-3 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

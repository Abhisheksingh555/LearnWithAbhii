import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = ()=> setCount(count+1);
  const decrement = () => {
    if(count >0){
       setCount(count - 1);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-cyan-400 relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl top-20 left-20"></div>
      <div className="absolute w-80 h-80 bg-white/10 rounded-full blur-2xl bottom-20 right-20"></div>

      <div className="relative z-10 backdrop-blur-xl bg-white/30 border border-white/40 px-16 py-12 rounded-3xl shadow-2xl text-center transform transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
        <h1 className="text-3xl font-bold text-gray-800 mb-10 tracking-wide drop-shadow-md">
          Stylish Counter
        </h1>

        <div className="flex items-center justify-center gap-12">
          <button
            onClick={decrement}
            className="w-16 h-16 text-4xl font-bold text-white rounded-full shadow-lg bg-rose-400 hover:scale-110 active:scale-95 transition-all duration-200"
          >
            −
          </button>

          <p className="text-7xl font-extrabold text-gray-900 select-none drop-shadow-sm">
            {count}
          </p>

          <button
            onClick={increment}
            className="w-16 h-16 text-4xl font-bold text-white rounded-full shadow-lg bg-green-400 hover:scale-110 active:scale-95 transition-all duration-200"
          >
            +
          </button>
        </div>

        <p className="text-gray-700 text-sm mt-10 italic opacity-80">
          Tap the buttons to adjust your mood 😊
        </p>
      </div>
    </div>
  );
}

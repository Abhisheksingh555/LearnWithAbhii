import React, { useState } from "react";

export default function Gallery() {
  const data = [
    {
      id: 1,
      title: "Mountain View",
      image: "https://picsum.photos/1200/800?1",
      description:
        "A breathtaking view of the mountains, surrounded by mist and sunlight.",
      location: "Himalayas, India",
      photographer: "John Doe",
    },
    {
      id: 2,
      title: "Ocean Breeze",
      image: "https://picsum.photos/1200/800?2",
      description:
        "Calming ocean waves under a pastel sunset, where sky meets sea.",
      location: "Goa, India",
      photographer: "Emily White",
    },
    {
      id: 3,
      title: "Forest Trail",
      image: "https://picsum.photos/1200/800?3",
      description:
        "A peaceful trail through a dense green forest with morning fog.",
      location: "Western Ghats, India",
      photographer: "Raj Sharma",
    },
    {
      id: 4,
      title: "City Lights",
      image: "https://picsum.photos/1200/800?4",
      description:
        "A vibrant city skyline that glows beautifully at night.",
      location: "Mumbai, India",
      photographer: "Sophia Kim",
    },
    {
      id: 5,
      title: "Desert Glow",
      image: "https://picsum.photos/1200/800?5",
      description:
        "Golden sands shimmering under the sunset — endless and vast.",
      location: "Rajasthan, India",
      photographer: "Ahmed Khan",
    },
    {
      id: 6,
      title: "Sunset Bliss",
      image: "https://picsum.photos/1200/800?6",
      description:
        "The magical hues of the sunset blending into the calm horizon.",
      location: "Kerala, India",
      photographer: "Lisa Brown",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
              <div className="text-white">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-sm opacity-90">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden animate-fadeIn"
          >
            {/* ✅ Close Button FIXED */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-5 text-gray-800 text-4xl font-bold hover:text-red-500 transition-all z-50"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-[500px] object-cover"
            />

            {/* Details */}
            <div className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {selected.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {selected.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6">
                <p className="text-sm text-gray-500">
                  📍 <span className="font-medium">{selected.location}</span>
                </p>
                <p className="text-sm text-gray-500 mt-3 sm:mt-0">
                  📷 Photographer:{" "}
                  <span className="font-medium">{selected.photographer}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

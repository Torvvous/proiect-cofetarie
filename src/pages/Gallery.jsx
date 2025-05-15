import React, { useState } from "react";

// sample image paths – replace with your own images
const images = [
  "src/assets/gallery-img1.jpg",
  "src/assets/gallery-img2.jpg",
  "src/assets/gallery-img3.jpg",
  "src/assets/gallery-img4.jpg",
  "src/assets/gallery-img5.jpg",
  "src/assets/gallery-img6.jpg",
  "src/assets/gallery-img7.jpg",
  "src/assets/gallery-img8.jpg",
  "src/assets/gallery-img9.jpg",
  "src/assets/gallery-img10.jpg",
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-yellow-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Galerie</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Explorați colecția noastră de fotografii care au surprins atmosfera
        mediului din cofetărie. Faceți clic pe orice imagine pentru a o
        vizualiza în mărime originală.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-md max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-black text-2xl hover:text-red-600"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;

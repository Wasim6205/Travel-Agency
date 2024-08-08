import React from "react";

const images = [
    'images/gal1.jpg',
    'images/gal2.jpg',
    'images/gal3.jpg',
    'images/gal4.jpg',
    'images/gal1.jpg',
    'images/gal2.jpg',
]

const Gallery = () => {
  return (
    <div>

      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h4>
        </div>
      </div>

        <div className="container mx-auto px-4 py-12">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image,index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
                        <img src={image} alt="" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>

    </div>
  );
};

export default Gallery;

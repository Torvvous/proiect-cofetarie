import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/src/assets/fruit-tarts.jpg",
  "/src/assets/cake.jpg",
  "/src/assets/cupcakes-large.jpg",
  "/src/assets/brownies.jpg",
  "/src/assets/creme-brulee.jpg",
];

const captions = [
  "Tarte cu Fructe",
  "Torturi Diverse",
  "Brioșe Împodobite",
  "Negrese Variate",
  "Specialități Crème Brûlée",
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => setCurrent((current - 1 + total) % total);
  const nextSlide = () => setCurrent((current + 1) % total);

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden">
      {/* Image */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
        <img
          src={images[current]}
          alt="carousel"
          className="w-full h-full object-cover rounded-xl transition duration-500"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 bg-opacity-60 text-base sm:text-lg md:text-xl text-black font-bold px-6 sm:px-12 md:px-24 py-2 rounded text-center">
          {captions[current]}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-orange-600 text-white rounded-full hover:bg-orange-700"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-orange-600 text-white rounded-full hover:bg-orange-700"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 sm:mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-orange-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

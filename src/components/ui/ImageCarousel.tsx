import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If there's only one image, just render it without controls
  if (images.length <= 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-full w-full">
      <img
        src={images[currentIndex]}
        alt={`${alt} - slide ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
      />
      
      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-10 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-10 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            } transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

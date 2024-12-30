"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  images: { src: StaticImageData; alt: string }[]; 
  delay: number; 
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, delay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(interval); 
  }, [images.length, delay]);

  return (
    <div className="carousel-container">
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="carousel-image"
        width={1600} 
        height={900} 
        priority
      />
    </div>
  );
};

export default ImageCarousel;

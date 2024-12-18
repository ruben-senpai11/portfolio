"use client"

import { useState, useEffect } from 'react';

import Image from 'next/image';

interface Props {
  images: [],
  initialImage: string,
  delay: number,
}


const ImageCarousel = ({ images, delay }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <Image src={designer} alt="White Devs Artisans" className='artisanIllustration' /> */}
      <Image src={images[index]} alt="White Devs Artisans" className='artisanIllustration' />
    </>
  );
};

export default ImageCarousel;
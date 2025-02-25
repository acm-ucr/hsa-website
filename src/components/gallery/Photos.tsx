"use client";

import React from "react";
import Image from "next/image";

const images_gallery = [
  { src: "/gallery/image1.webp" },
  { src: "/gallery/image2.webp" },
  { src: "/gallery/image3.webp" },
  { src: "/gallery/image4.webp" },
  { src: "/gallery/image6.webp" },
  { src: "/gallery/image7.webp" },
  { src: "/gallery/image8.webp" },
  { src: "/gallery/image9.webp" },
  { src: "/gallery/image10.webp" },
  { src: "/gallery/image11.webp" },
  { src: "/gallery/image12.webp" },
  { src: "/gallery/image13.webp" },
  { src: "/gallery/image14.webp" },
  { src: "/gallery/image15.webp" },
];

const Photos = () => {
  return (
    <div className="m-1/10 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {images_gallery.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <Image
            src={image.src}
            alt="gallery"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
};

export default Photos;

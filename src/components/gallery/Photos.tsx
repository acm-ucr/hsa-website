"use client";

import React from "react";
import { Gallery } from "react-grid-gallery";

const images_gallery = [
  { src: "/gallery images/image1.webp",},
  { src: "/gallery images/image2.webp", },
  { src: "/gallery images/image3.webp", },
  { src: "/gallery images/image4.webp", },
  { src: "/gallery images/image6.webp",  },
  { src: "/gallery images/image7.webp", },
  { src: "/gallery images/image8.webp", },
  { src: "/gallery images/image9.webp", },
  { src: "/gallery images/image10.webp", },
  { src: "/gallery images/image11.webp", },
  { src: "/gallery images/image12.webp", },
  { src: "/gallery images/image13.webp", },
  { src: "/gallery images/image14.webp", },
  { src: "/gallery images/image15.webp", },
];

const Photos = () => {
  return (
    <div className="m-1/10 grid grid-cols-3 gap-4 p-4">
      {images_gallery.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <img src={image.src} alt="gallery" className="w-full h-full object-cover" />
          </div>
      ))}

          
    </div> 
  );
};

export default Photos;

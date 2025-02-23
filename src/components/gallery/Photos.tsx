"use client";

import React from "react";

const images_gallery = [
  { src: "/gallery_images/image1.webp" },
  { src: "/gallery_images/image2.webp" },
  { src: "/gallery_images/image3.webp" },
  { src: "/gallery_images/image4.webp" },
  { src: "/gallery_images/image6.webp" },
  { src: "/gallery_images/image7.webp" },
  { src: "/gallery_images/image8.webp" },
  { src: "/gallery_images/image9.webp" },
  { src: "/gallery_images/image10.webp" },
  { src: "/gallery_images/image11.webp" },
  { src: "/gallery_images/image12.webp" },
  { src: "/gallery_images/image13.webp" },
  { src: "/gallery_images/image14.webp" },
  { src: "/gallery_images/image15.webp" },
];

const Photos = () => {
  return (
    <div className="m-1/10 grid grid-cols-3 gap-4 p-4">
      {images_gallery.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <img
            src={image.src}
            alt="gallery"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Photos;

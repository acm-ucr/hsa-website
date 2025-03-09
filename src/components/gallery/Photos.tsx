"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import image1 from "@/public/gallery/image1.webp";
import image2 from "@/public/gallery/image2.webp";
import image3 from "@/public/gallery/image3.webp";
import image4 from "@/public/gallery/image4.webp";
import image5 from "@/public/gallery/image5.webp";
import image6 from "@/public/gallery/image6.webp";
import image7 from "@/public/gallery/image7.webp";
import image8 from "@/public/gallery/image8.webp";
import image9 from "@/public/gallery/image9.webp";
import image10 from "@/public/gallery/image10.webp";
import image11 from "@/public/gallery/image11.webp";
import image12 from "@/public/gallery/image12.webp";
import image13 from "@/public/gallery/image13.webp";
import image14 from "@/public/gallery/image14.webp";
import image15 from "@/public/gallery/image15.webp";

interface GalleryImg {
  src: StaticImageData;
}

const images_gallery: GalleryImg[] = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
  { src: image6 },
  { src: image7 },
  { src: image8 },
  { src: image9 },
  { src: image10 },
  { src: image11 },
  { src: image12 },
  { src: image13 },
  { src: image14 },
  { src: image15 },
];

const Photos = () => {
  return (
    <div className="m-1/10 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {images_gallery.map(({ src }, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <Image
            src={src}
            alt={`Gallery ${index + 1}`}
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

"use client";

import React, { useEffect, useState } from "react";
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
import * as motion from "motion/react-client";

const images_gallery: StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Photos = () => {
  const [visibleImages, setVisibleImages] = useState<number>(0);

  useEffect(() => {
    images_gallery.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages((prev) => prev + 1);
      }, index * 200);
    });
  }, []);

  return (
    <div className="m-1/10 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {images_gallery.map((src, index) => (
        <motion.div
          key={index}
          className="overflow-hidden rounded-lg pl-1 pr-4 shadow-md"
          initial="hidden"
          animate={index < visibleImages ? "visible" : "hidden"}
          variants={fadeInFromBottom}
        >
          <Image
            src={src}
            alt={`Gallery ${index + 1}`}
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Photos;

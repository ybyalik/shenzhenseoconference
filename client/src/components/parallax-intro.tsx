import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

import feature1Img from "@assets/home-featured5-png_1763345458785.webp";
import feature2Img from "@assets/feature2-png_1763345462341.webp";
import feature3Img from "@assets/feature3-png_1763345462343.webp";
import feature4Img from "@assets/feature9-png_1763345462344.webp";
import feature5Img from "@assets/home-featured4-png_1763345462344.webp";

export default function ParallaxIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const images = [
    {
      src: feature1Img,
      alt: "Conference attendees networking",
      initialX: -15,
      initialY: -10,
      rotation: -15,
      moveX: -400,
      moveY: -300
    },
    {
      src: feature2Img,
      alt: "Speaker presenting on stage",
      initialX: 55,
      initialY: -5,
      rotation: 8,
      moveX: 400,
      moveY: -250
    },
    {
      src: feature3Img,
      alt: "Panel discussion",
      initialX: 45,
      initialY: 45,
      rotation: 12,
      moveX: 350,
      moveY: 400
    },
    {
      src: feature4Img,
      alt: "Keynote speaker",
      initialX: -10,
      initialY: 50,
      rotation: -12,
      moveX: -350,
      moveY: 400
    },
    {
      src: feature5Img,
      alt: "Speaker at conference",
      initialX: 70,
      initialY: 25,
      rotation: 18,
      moveX: 450,
      moveY: 200
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden flex items-center justify-center"
      data-testid="parallax-intro"
    >
      <div className="absolute inset-0 pointer-events-none">
        {images.map((image, index) => {
          const x = useTransform(scrollYProgress, [0, 1], [image.initialX, image.moveX]);
          const y = useTransform(scrollYProgress, [0, 1], [image.initialY, image.moveY]);
          const rotate = useTransform(scrollYProgress, [0, 1], [image.rotation, image.rotation + 20]);
          const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
          
          return (
            <motion.div
              key={index}
              style={{ x, y, rotate, opacity }}
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-48 md:w-64 lg:w-80 shadow-2xl rounded-lg"
                style={{
                  position: 'absolute',
                  left: `${image.initialX}%`,
                  top: `${image.initialY}%`,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-testid="text-parallax-intro"
        >
          Join us in Shenzhen, the Silicon Valley of China, to learn, network, and explore cutting-edge SEO strategies that bridge Eastern and Western markets.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

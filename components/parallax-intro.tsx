import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { StaticImageData } from "next/image";

import feature1Img from "@assets/home-featured5-png_1763345458785.webp";
import feature2Img from "@assets/feature2-png_1763345462341.webp";
import feature3Img from "@assets/feature3-png_1763345462343.webp";
import feature4Img from "@assets/feature9-png_1763345462344.webp";
import feature5Img from "@assets/home-featured4-png_1763345462344.webp";

const FloatingImage = ({ 
  src, 
  alt, 
  startX, 
  startY, 
  rotation, 
  moveX,
  moveY,
  delay 
}: { 
  src: string | StaticImageData; 
  alt: string; 
  startX: number; 
  startY: number; 
  rotation: number; 
  moveX: number;
  moveY: number;
  delay: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xOffset = useTransform(scrollYProgress, [0, 1], [0, moveX]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, moveY]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 0.5, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="absolute pointer-events-none"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        x: xOffset,
        y: yOffset,
        opacity,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <img
        src={typeof src === 'string' ? src : src.src}
        alt={alt}
        className="w-52 md:w-72 lg:w-96"
        style={{ 
          transform: `rotate(${rotation}deg)`,
          filter: 'drop-shadow(0 20px 25px rgb(0 0 0 / 0.15))'
        }}
      />
    </motion.div>
  );
};

export default function ParallaxIntro() {
  return (
    <section 
      className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden flex items-center justify-center"
      data-testid="parallax-intro"
    >
      <FloatingImage
        src={feature1Img}
        alt="Conference attendees networking"
        startX={20}
        startY={20}
        rotation={-15}
        moveX={-400}
        moveY={-300}
        delay={0}
      />
      <FloatingImage
        src={feature2Img}
        alt="Speaker presenting on stage"
        startX={65}
        startY={15}
        rotation={8}
        moveX={350}
        moveY={-250}
        delay={0.1}
      />
      <FloatingImage
        src={feature3Img}
        alt="Panel discussion"
        startX={60}
        startY={55}
        rotation={12}
        moveX={300}
        moveY={350}
        delay={0.2}
      />
      <FloatingImage
        src={feature4Img}
        alt="Keynote speaker"
        startX={25}
        startY={60}
        rotation={-12}
        moveX={-350}
        moveY={400}
        delay={0.3}
      />
      <FloatingImage
        src={feature5Img}
        alt="Speaker at conference"
        startX={70}
        startY={40}
        rotation={18}
        moveX={400}
        moveY={200}
        delay={0.4}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="text-parallax-intro"
        >
          Join us in Shenzhen, the Silicon Valley of China, to learn, network, and explore cutting-edge SEO strategies that bridge Eastern and Western markets.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const topics = [
  { text: "🎤 Taylor Swift", color: "#FF9A62" },
  { text: "🧬 DNA Structure", color: "#94DBFB" },
  { text: "🎮 Minecraft", color: "#C9A0FF" },
  { text: "🏀 NBA History", color: "#FEDE67" },
  { text: "🎬 Harry Potter", color: "#FF9A62" },
  { text: "🦖 Dinosaurs", color: "#94DBFB" },
  { text: "🚀 Space Travel", color: "#C9A0FF" },
  { text: "🎨 Van Gogh", color: "#FEDE67" },
  { text: "🌍 Geography", color: "#FF9A62" },
  { text: "⚛️ Physics", color: "#94DBFB" },
  { text: "🎵 Music Theory", color: "#C9A0FF" },
  { text: "📚 Literature", color: "#FEDE67" },
  { text: "🎭 Shakespeare", color: "#FF9A62" },
  { text: "🌿 Biology", color: "#94DBFB" },
  { text: "🎸 Rock Music", color: "#C9A0FF" },
  { text: "⚽️ World Cup", color: "#FEDE67" },
  { text: "🎨 Modern Art", color: "#FF9A62" },
  { text: "🧪 Chemistry", color: "#94DBFB" },
  { text: "🎮 Video Games", color: "#C9A0FF" },
  { text: "📱 Technology", color: "#FEDE67" }
];

export default function RotatingTopics() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topics.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] relative flex items-center justify-center min-h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ 
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute whitespace-nowrap leading-[1.1]"
        >
          <span
            className="text-center block"
            style={{ color: topics[currentIndex].color }}
          >
            {topics[currentIndex].text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
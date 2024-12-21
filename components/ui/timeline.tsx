"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="relative">
      {data.map((item, index) => (
        <div key={index} className="relative mb-10">
          <motion.div
            className="absolute -left-1 top-1 w-2 h-2 bg-blue-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          />
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-300">
            {item.title}
          </h3>
          <div className="text-gray-700 dark:text-gray-400">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

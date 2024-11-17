import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About PulseTap</h1>
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-6">
              PulseTap is a revolutionary rhythm gaming platform that combines the excitement of music
              with the thrill of gaming. Our platform offers a unique experience where players can
              test their rhythm skills while earning rewards through blockchain technology.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2023, our mission is to create an engaging and rewarding gaming experience
              that brings together music lovers and gamers from around the world.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We envision a future where gaming and music come together seamlessly, creating
              immersive experiences that reward players for their skills and dedication.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Rhythm-based gameplay mechanics</li>
              <li>Blockchain integration for rewards</li>
              <li>Global leaderboards</li>
              <li>Multiplayer competitions</li>
              <li>Regular tournaments with prizes</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import { useWallet } from '../hooks/useWallet';

const games = [
  {
    id: 1,
    title: 'Beat Master',
    description: 'Test your rhythm skills with this classic beat-matching challenge',
    image: '/images/beat-master.jpg',
    difficulty: 'Easy' as const,
    minStake: '0.01 ETH'
  },
  {
    id: 2,
    title: 'Rhythm Rush',
    description: 'Race against time in this fast-paced musical adventure',
    image: '/images/rhythm-rush.jpg',
    difficulty: 'Medium' as const,
    minStake: '0.05 ETH'
  },
  {
    id: 3,
    title: 'Pulse Warrior',
    description: 'Battle through intense rhythmic challenges in this epic journey',
    image: '/images/pulse-warrior.jpg',
    difficulty: 'Hard' as const,
    minStake: '0.1 ETH'
  }
];

export default function Games() {
  const { isConnected } = useWallet();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Available Games</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard
                key={game.id}
                {...game}
                isWalletConnected={isConnected}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
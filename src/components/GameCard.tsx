import { motion } from 'framer-motion';
import { useState } from 'react';
import { useWallet } from '../hooks/useWallet';
import { toast } from 'react-hot-toast';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  minStake: string;
  isWalletConnected: boolean;
}

export default function GameCard({ 
  title, 
  description, 
  image, 
  difficulty,
  minStake,
  isWalletConnected 
}: GameCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { connect } = useWallet();

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  };

  const handlePlay = async () => {
    if (!isWalletConnected) {
      toast.error('Please connect your wallet first');
      connect();
      return;
    }

    setIsLoading(true);
    try {
      // Here you would handle the game start logic
      toast.success(`Starting ${title}`);
    } catch (error) {
      toast.error('Failed to start game');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">Minimum Stake: {minStake}</p>
        <button 
          onClick={handlePlay}
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:bg-gray-400"
        >
          {isLoading ? 'Loading...' : 'Play Now'}
        </button>
      </div>
    </motion.div>
  );
}
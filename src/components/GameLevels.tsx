import { motion } from 'framer-motion';
import { FaStar, FaLock } from 'react-icons/fa';

interface Level {
  id: number;
  name: string;
  difficulty: string;
  unlocked: boolean;
  stars: number;
  requiredScore: number;
}

const levels: Level[] = [
  { id: 1, name: "Tutorial", difficulty: "Easy", unlocked: true, stars: 3, requiredScore: 1000 },
  { id: 2, name: "First Steps", difficulty: "Easy", unlocked: true, stars: 2, requiredScore: 2000 },
  { id: 3, name: "Basic Rhythm", difficulty: "Easy", unlocked: true, stars: 1, requiredScore: 3000 },
  { id: 4, name: "Getting Harder", difficulty: "Medium", unlocked: false, stars: 0, requiredScore: 4000 },
  { id: 5, name: "Complex Beats", difficulty: "Medium", unlocked: false, stars: 0, requiredScore: 5000 },
  { id: 6, name: "Master Class", difficulty: "Hard", unlocked: false, stars: 0, requiredScore: 6000 },
];

export default function GameLevels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {levels.map((level) => (
        <motion.div
          key={level.id}
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-lg shadow-md ${
            level.unlocked ? 'bg-white' : 'bg-gray-100'
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">{level.name}</h3>
            {!level.unlocked && <FaLock className="text-gray-400" />}
          </div>
          <div className="flex items-center mb-2">
            <span className={`text-sm font-medium px-2 py-1 rounded ${
              level.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              level.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {level.difficulty}
            </span>
          </div>
          <div className="flex space-x-1 mb-2">
            {[...Array(3)].map((_, i) => (
              <FaStar
                key={i}
                className={i < level.stars ? 'text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Required Score: {level.requiredScore}
          </p>
          <button
            className={`w-full py-2 px-4 rounded-lg font-medium ${
              level.unlocked
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!level.unlocked}
          >
            {level.unlocked ? 'Play Now' : 'Locked'}
          </button>
        </motion.div>
      ))}
    </div>
  );
}
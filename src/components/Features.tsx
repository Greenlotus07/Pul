import { motion } from 'framer-motion';
import { FaMusic, FaGamepad, FaTrophy, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: FaMusic,
    title: 'Rhythm Based',
    description: 'Tap to the beat of the music in perfectly synchronized gameplay'
  },
  {
    icon: FaGamepad,
    title: 'Multiple Games',
    description: 'Choose from a variety of rhythm-based games and challenges'
  },
  {
    icon: FaTrophy,
    title: 'Leaderboards',
    description: 'Compete with players worldwide and climb the rankings'
  },
  {
    icon: FaUsers,
    title: 'Multiplayer',
    description: 'Play with friends in real-time multiplayer modes'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose PulseTap?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
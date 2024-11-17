import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-20 pb-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-purple-600">PulseTap</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience rhythm like never before. Tap into the beat and let the music guide you through an immersive gaming journey.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#games"
              className="inline-block bg-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-700 transition-colors duration-200"
            >
              Start Playing
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
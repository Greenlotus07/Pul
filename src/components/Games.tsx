import GameCard from './GameCard';

const games = [
  {
    title: 'Beat Master',
    description: 'Test your rhythm skills with this classic beat-matching challenge',
    image: '/images/beat-master.jpg',
    difficulty: 'Easy' as const
  },
  {
    title: 'Rhythm Rush',
    description: 'Race against time in this fast-paced musical adventure',
    image: '/images/rhythm-rush.jpg',
    difficulty: 'Medium' as const
  },
  {
    title: 'Pulse Warrior',
    description: 'Battle through intense rhythmic challenges in this epic journey',
    image: '/images/pulse-warrior.jpg',
    difficulty: 'Hard' as const
  }
];

export default function Games() {
  return (
    <section id="games" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}
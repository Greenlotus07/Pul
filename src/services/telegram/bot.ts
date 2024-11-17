import TelegramBot from 'node-telegram-bot-api';

const token = '6883533677:AAFHvYWPWGLWQxEPFGBPLGBPWGLWQxEPFGBP';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to PulseTap Bot! 🎮\n\nI will notify you about your game progress and achievements.');
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Available commands:\n/start - Start the bot\n/help - Show this help message\n/status - Check bot status');
});

bot.onText(/\/status/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🟢 Bot is running and ready to serve!');
});

export const sendGameNotification = async (userId: string, gameTitle: string, score: number) => {
  try {
    await bot.sendMessage(userId, `🎮 New Achievement in ${gameTitle}!\n\n🏆 Score: ${score}\n\nKeep up the great work! 🌟`);
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
  }
};
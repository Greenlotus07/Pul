import TelegramBot from 'node-telegram-bot-api';

const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

export const sendGameNotification = async (userId: string, gameTitle: string, score: number) => {
  try {
    await bot.sendMessage(userId, `New high score in ${gameTitle}: ${score}`);
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
  }
};
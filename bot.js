const TelegramBot = require('node-telegram-bot-api');

// Bot token (keyin Render.com da qo'shamiz)
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Assalomu alaykum! GM Savdo botiga xush kelibsiz!');
});

// Mahsulotlar ro'yxati
bot.onText(/\/mahsulotlar/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Bizda quyidagi mahsulotlar mavjud:\n\n- Telefon\n- Noutbuk\n- Planshet');
});

console.log('Bot ishga tushdi...');
const axios = require("axios");

const sendDiscordNotification = async ({
  name,
  email,
  subject,
  message,
}) => {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    console.log("Discord Webhook URL not configured.");
    return;
  }

  const payload = {
    username: "Portfolio Contact Bot",

    embeds: [
      {
        title: "📬 New Portfolio Contact",

        color: 0x5865f2,

        fields: [
          {
            name: "👤 Name",
            value: name,
            inline: true,
          },
          {
            name: "📧 Email",
            value: email,
            inline: true,
          },
          {
            name: "📌 Subject",
            value: subject,
          },
          {
            name: "💬 Message",
            value: message,
          },
        ],

        timestamp: new Date(),

        footer: {
          text: "Portfolio Website",
        },
      },
    ],
  };

  await axios.post(process.env.DISCORD_WEBHOOK_URL, payload);
};

module.exports = {
  sendDiscordNotification,
};
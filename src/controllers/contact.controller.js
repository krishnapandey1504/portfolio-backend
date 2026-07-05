const Contact = require("../models/Contact");

const { sendContactEmail } = require("../services/resend.service");
const { sendDiscordNotification } = require("../services/discord.service");

const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Save message first
    await Contact.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    // Send notifications in background
    Promise.allSettled([
      sendContactEmail({
        name,
        email,
        subject,
        message,
      }),

      sendDiscordNotification({
        name,
        email,
        subject,
        message,
      }),
    ])
      .then((results) => {
        results.forEach((result, index) => {
          if (result.status === "rejected") {
            console.error(
              `${index === 0 ? "Email" : "Discord"} Notification Failed:`,
              result.reason
            );
          }
        });
      })
      .catch((err) => {
        console.error("Notification Error:", err);
      });

    // Respond immediately
    return res.status(201).json({
      success: true,
      message: "Message submitted successfully.",
    });

  } catch (error) {
    console.error("Contact Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

module.exports = {
  sendMessage,
};
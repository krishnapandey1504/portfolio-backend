const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async ({ name, email, subject, message }) => {
  try {
    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.CONTACT_EMAIL,
      subject: `📩 Portfolio Contact | ${subject}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p>${message}</p>
      `,
    });

    if (response.error) {
      console.error("Resend Error:", response.error);
    }

    return response;
  } catch (error) {
    console.error("Email Service Error:", error.message);
    throw error;
  }
};

module.exports = {
  sendContactEmail,
};
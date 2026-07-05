# Portfolio Backend

Production-ready backend API powering my personal developer portfolio.

This backend handles contact form submissions, stores messages securely in MongoDB, sends email notifications using Resend, and delivers real-time Discord notifications.

---

## 🚀 Features

- RESTful API built with Express.js
- MongoDB Atlas integration
- Contact form API
- Resend email notifications
- Discord webhook notifications
- Input validation
- Error handling middleware
- Environment-based configuration
- CORS support
- Production-ready project structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Resend
- Discord Webhooks
- CORS
- dotenv

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── app.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

CONTACT_EMAIL=your_email@gmail.com

FROM_EMAIL=your_verified_sender_email

RESEND_API_KEY=your_resend_api_key

DISCORD_WEBHOOK_URL=your_discord_webhook

JWT_SECRET=your_jwt_secret
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/krishnapandey1504/portfolio-backend.git
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Or start the production server

```bash
npm start
```

---

## 📬 API Endpoint

### Submit Contact Form

```
POST /api/contact
```

Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Internship Opportunity",
  "message": "Hello Krishna!"
}
```

Success Response

```json
{
  "success": true,
  "message": "Message submitted successfully."
}
```

---

## 🔔 Notifications

Each successful submission:

- Saves the message in MongoDB
- Sends an email notification using Resend
- Sends a Discord notification via Webhook

---

## 🌐 Frontend Repository

The frontend for this project is built using Next.js.

Frontend Repository:

```
https://github.com/krishnapandey1504/portfolio
```

---

## 📄 License

This project is open source and available under the MIT License.

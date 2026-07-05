const express = require("express");
const cors = require("cors");

const errorHandler = require("./middleware/error.middleware");
const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Portfolio Backend Running 🚀"
    });
});

app.use(errorHandler);

module.exports = app;
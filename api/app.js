const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const documentRoutes = require('./routes/documentRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
dotenv.config();

const port = process.env.PORT || 7000;

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/generate-document', documentRoutes);

// Error Handler Middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

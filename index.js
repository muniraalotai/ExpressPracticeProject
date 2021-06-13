const express = require('express');
const logger = require('./middleware/logger')

const app = express();

// Init middleware
app.use(logger)

// Body Parser
app.use(express.json);

// Members API Routes
app.use('/api/members', require('./routes/member'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>console.log(`Server Running on port: http://localhost:${PORT}`));

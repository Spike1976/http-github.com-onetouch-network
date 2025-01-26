const express = require('express');
const cors = require('cors');

const sdrRoutes = require('./routes/sdr');
const authRoutes = require('./routes/auth');
const proxyRoutes = require('./routes/proxy');
const didRoutes = require('./routes/did');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/sdr', sdrRoutes);
app.use('/auth', authRoutes);
app.use('/proxy', proxyRoutes);
app.use('/did', didRoutes);

// Server Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

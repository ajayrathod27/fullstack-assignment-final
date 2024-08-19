const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db'); 
const helpCenterRoutes = require('./routes/helpCenterRoutes');

connectToMongo(); 

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/cards', require('./routes/helpCenterRoutes'));
app.use('/api', helpCenterRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

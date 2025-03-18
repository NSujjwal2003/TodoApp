const express = require('express');
const { PORT } = require('./config/server.config');
const apirouter = require('./routes');
const app = express();

app.use('/api', apirouter); 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/api');

// * Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// * HTTP requests
app.use('/api', routes);

// * Serve static assets in production
app.use('/now-ui-portfolio/', express.static('client/public'));
app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

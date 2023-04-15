import express from 'express';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
import cors from 'cors';
import db from './models/index.js';

const app = express();

var corsOptions = {
	origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to TrungTN application.' });
});

db.sequelize.sync({ force: true }).then(() => {
	console.log('Drop and re-sync db.');
});

export default (app) => {
	require('./routes/todo.routes.js').default(app);
};

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

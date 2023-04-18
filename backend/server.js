import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import db from './models/index.js';
import routes from './routes/index.js';
dotenv.config();

const app = express();

const PORT_FRONTEND = process.env.PORT_FRONTEND || 4000;
var corsOptions = {
	origin: `http://localhost:${PORT_FRONTEND}`,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
	return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
	return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
	return res.send('Received a DELETE HTTP method');
});

// db.sequelize.sync({ force: true }).then(() => {
// 	console.log('Drop and re-sync db.');
// });
db.sequelize
	.sync()
	.then(() => {
		console.log('Synced db.');
	})
	.catch((err) => {
		console.log('Failed to sync db: ' + err.message);
	});

app.use('/api/todo', routes.todo);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}.`);
});

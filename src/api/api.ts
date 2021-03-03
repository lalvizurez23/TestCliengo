import { Router } from 'express';
import creditCard from './routes/cardRoute';
import { createConnection } from 'typeorm';

async function startConnection(){
	await createConnection();
} 

export = (() => {
	const app = Router();
    startConnection();
    creditCard(app);
	return app
})();
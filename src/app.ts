import express from 'express';
import routes from './api/api';
import {ConfigurationAPI} from './config/config';

const app = express();

async function startServer(){
    app.use(routes);
    app.listen(ConfigurationAPI.apiPort, () => {
        console.log(`Server inicializado en el puerto, ${ConfigurationAPI.apiPort}`);
    });
}

startServer();

export default app;
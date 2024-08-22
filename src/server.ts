import express, { urlencoded } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes';

dotenv.config();

const server = express();

server.use(helmet());
server.use(express.json());
server.use(urlencoded({extended: true}));
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req, res) => {
    res.send("Página não encontrada")
})

server.listen(process.env.PORT, () => {
    console.log(`Rodando a aplicação na porta: ${process.env.PORT}` );
});
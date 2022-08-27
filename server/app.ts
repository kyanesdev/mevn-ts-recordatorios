import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import taskRoutes from './routes';
import path from 'path';

const app = express()

//Middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

app.use('/api' , taskRoutes)

app.use(express.static(path.join(__dirname, ".." , ".." , "dist")))

export default app;
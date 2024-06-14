import express from "express";
import path from 'path';

import { config } from 'dotenv';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

config();

import indexRoute from './routes/index.route.js';
import statistikRoute from './routes/statistik.route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || "3001";

const app = express();



// Tentukan lokasi folder views
const viewsDirectories = [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views/stats'),


];

// view engine setup
app.set('views', viewsDirectories);
app.set('view engine', 'ejs');



app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',indexRoute, statistikRoute);



app.listen(port, () => console.log(`listening on ${port}`));
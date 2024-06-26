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

app.use('/', indexRoute, statistikRoute);

// Middleware untuk menangani kesalahan 404
app.use((req, res, next) => {
  res.status(404);
  res.render('error', {
    message: 'Page Not Found',
    error: { status: 404 }
  });
});

// Middleware untuk menangani kesalahan server
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

app.listen(port, () => console.log(`listening on ${port}`));

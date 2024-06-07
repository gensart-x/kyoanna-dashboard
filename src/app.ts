import express, { Application } from 'express';
import path from 'path';

const app: Application = express();

// Static Files
app.use('/static', express.static(path.join(__dirname, '../public')));

// Middlewares
import middlewares from './middlewares/middleware';
app.use(middlewares);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Routes
import indexRouter from './routes/global.routes';
app.use('/', indexRouter);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`⚡Server is running on port: ${PORT}`);
});

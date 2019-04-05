import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index';
import languagesRouter from './routes/languages';
import conlangsRouter from './routes/conlangs';
import phraseologyRouter from './routes/phraseology';
import translationRouter from './routes/translation';
import translationBadRouter from './routes/translationBad';
import translationMachineRouter from './routes/translationMachine';
import idiomsRouter from './routes/idioms';

// import db from './db/mongo';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log('MongoDB connected'));

app.use('/', indexRouter);
// Индоевропейские языки
app.use('/languages', languagesRouter);
// Искусственные
app.use('/conlangs', conlangsRouter);
// Красота не спасет мир
app.use('/phraseology', phraseologyRouter);
// Ложные друзья переводчика
app.use('/translation-bad', translationBadRouter);
// Машинный перевод
app.use('/translation-machine', translationMachineRouter);
// Русский язык
app.use('/russian', languagesRouter);
// На разных языках
app.use('/translation', translationRouter);
// Сленг
app.use('/idioms', idiomsRouter);

export default app;

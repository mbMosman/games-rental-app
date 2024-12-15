import express from 'express';
import GamesRouter from './gamesRouter.js';

const app = express();

app.use(express.json());
app.use(express.static('build'));
app.use('/api/games', GamesRouter);

const PORT = process.env.PORT || 5001;
app.listen( PORT, function() {
  console.log(`Server is listening on port ${PORT}...`);
})
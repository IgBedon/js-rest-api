import app from './app.js';

const port = 3001;
app.listen(port, () => {
  console.log(`Rodando na porta http://localhost:${port}`);
});

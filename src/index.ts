import app from './App';
import Database from './Database';


(async () => {
  const { PORT } = process.env;

  await new Database().init();

  app.listen(PORT || 3030, () => console.info(`Server up ${PORT}`));
})();



import app from "./App";

const { PORT } = process.env;

app.listen(PORT || 3030, () => console.info(`Server up ${PORT}`));

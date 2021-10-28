import express from "express"
import { loggerMiddleware } from './middlewares/loggerMiddleware';
import routes from './router';

const app = express();

app.use(loggerMiddleware);
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`✅ Server is running on port ${PORT}`);
});
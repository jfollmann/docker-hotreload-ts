import express from "express"
import { loggerMiddleware } from './middlewares/loggerMiddleware';

const app = express();

app.use(loggerMiddleware);

app.get('/', (_req, res) => {
  res.json({ appRunning: true });
});

app.get('/user', (_req, res) => {
  res.json([{ userName: 'jfollmann', name: 'Follmann' }]);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`)
});
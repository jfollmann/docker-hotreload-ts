import { Router } from 'express';

const routes = Router();

routes.get('/', (_req, res) => {
  res.json({ message: 'Hello Hot Reload', running: true });
});

routes.get('/users', (_req, res) => { 
  res.json([{ id: 1, name: 'Jefferson Follmann', userName: 'jfollmann' }]);
});

export default routes;
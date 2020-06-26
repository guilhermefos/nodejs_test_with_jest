import { Router } from 'express';
import { uuid } from 'uuidv4'

const routes = Router();

routes.post('/user', (request, response) => {
  const { email, name } = request.body

  return response.json({
    id: uuid(),
    name,
    email
  });
});

export default routes;

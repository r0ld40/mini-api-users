import { Router } from 'express';
import User from './app/controllers/users';

const route = new Router();

route.get('/', User.getUsers);
route.get('/:id', User.getOneUser);

route.post('/', User.createUser);

route.delete('/:id', User.deleteUser);

export default route;

import { Router } from 'express';
import { getFoo } from '../controllers/foo/foo.controller';

const fooRoutes: Router = Router();

fooRoutes.get('/foo', getFoo);

export default fooRoutes;

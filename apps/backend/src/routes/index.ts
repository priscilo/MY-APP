import { Router } from 'express';
import { helloController } from '../controllers/hello';

const router = Router();

router.get('/hello', helloController);

export default router;
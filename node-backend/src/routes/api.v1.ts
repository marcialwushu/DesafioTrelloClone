import { Router } from 'express';

const router = Router();

router.get('/boards', (req, res) => {res.send('Test works')});
router.get('/boards/:id', () => {});

export default router;

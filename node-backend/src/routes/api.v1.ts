import { Router } from 'express';

const router = Router();

router.get('/boards', (req, res) => {res.json({value: 'JSON test'})});
router.get('/boards/:id', () => {});

export default router;

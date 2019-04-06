import express from 'express';
import slangsModel from '../models/slangs';

const router = express.Router();

/* GET slangs list. */
router.get('/', (req, res) => {
  slangsModel.all()
    .then(slangs => res.json({ slangs }));
});

/* GET slang. */
router.get('/:slangId', (req, res) => {
  slangsModel.bySlug(req.params.slangId)
    .then(slang => res.json({ slang }));
});

export default router;

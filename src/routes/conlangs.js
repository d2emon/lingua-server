import express from 'express';
import wikiModel from '../models/wiki';
import conlangModel from '../models/conlangs';

const router = express.Router();

/* GET wiki page. */
router.get('/', (req, res) => {
  conlangModel.getAll()
    .then(conlangs => res.json({ conlangs }));
});

export default router;

import express from 'express';
import wikiModel from '../models/wiki';

const router = express.Router();

/* GET wiki page. */
router.get('/', (req, res) => {
  wikiModel.bySlug('translation-bad')
    .then(wiki => res.json(wiki));
});

export default router;
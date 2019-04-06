import express from 'express';
import familiesModel from '../models/families';
import languagesModel from '../models/languages';
import wikiModel from '../models/wiki';

const router = express.Router();

/* GET languages list. */
router.get('/', (req, res) => {
  languagesModel.all()
    .then(languages => res.json({ languages }));
});

/* GET language groups list. */
router.get('/groups/:group?', (req, res) => {
  const { group } = req.params;
  familiesModel.byParent(group)
    .then(groups => res.json({ group, groups }));
});

/* GET language group with children. */
router.get('/subgroups/:group?', (req, res) => {
  const { group } = req.params;
  familiesModel.withChildren(group)
    .then(groups => res.json({ group, groups }));
});

/* GET language group. */
router.get('/group/:group?', (req, res) => {
  const { group } = req.params;
  familiesModel.byParent()
    .then(groups => group && familiesModel.withChildren(group))
    .then(groups => res.json({ group, groups: groups && groups.children }));
});

/* GET languages wiki page. */
router.get('/wiki', (req, res) => {
  wikiModel.bySlug('languages')
    .then(wiki => res.json(wiki));
});

/* GET irish language wiki page. */
router.get('/wiki/irish', (req, res) => {
  wikiModel.bySlug('languages/irish')
    .then(wiki => res.json(wiki));
});

/* GET russian language wiki page. */
router.get('/wiki/russian', (req, res) => {
  wikiModel.bySlug('languages/russian')
    .then(wiki => res.json(wiki));
});

export default router;

import express from 'express';
import familiesModel from '../models/families';
import languagesModel from '../models/languages';

const router = express.Router();

/* GET languages list. */
router.get('/', (req, res) => {
  languagesModel.getAll()
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
  // families.byParent()
  //   .then(data => item && families.withChildren(item.slug))
  //   .then(family => family && family.children)
});

export default router;

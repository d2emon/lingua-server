import conlangs from './data/conlangs';

const bySlug = slug => conlangs
  .then(data => data.find(item => item.slug === slug));

export default {
  getAll: () => conlangs,
  bySlug,
};

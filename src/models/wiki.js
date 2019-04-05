import wiki from './data/wiki';

const bySlug = slug => wiki
  .then(data => data.find(item => item.slug === slug));

export default {
  getAll: () => wiki,
  bySlug,
};

import languages from './data/languages';

export default {
  getAll: () => languages,
  byGroup: slug => languages
    .then(data => data.filter(item => item.group === slug)),
};

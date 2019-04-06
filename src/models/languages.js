import languages from './data/languages';

export default {
  all: () => languages,
  byGroup: slug => languages
    .then(data => data.filter(item => item.group === slug)),
};

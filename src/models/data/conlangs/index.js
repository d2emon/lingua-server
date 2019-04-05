import defaultLanguages from './default.json';

export default Promise.resolve(
  [].concat(
    defaultLanguages,
  ).map((language, id) => ({
    id: id + 1,
    language: true,
    // taxon: taxons[language.level],
    link: `/conlang/${language.slug || (id + 1)}`,
    ...language,
  })),
);

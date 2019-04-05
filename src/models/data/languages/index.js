import defaultLanguages from './default.json';
import satemLanguages from './satem.json';
import centumLanguages from './centum.json';

import taxons from './taxons.json';

export default Promise.resolve(
  [].concat(
    defaultLanguages,
    centumLanguages,
    satemLanguages,
  ).map((language, id) => ({
    id: id + 1,
    language: true,
    taxon: taxons[language.level],
    link: `/language/${language.slug || (id + 1)}`,
    ...language,
  })),
);

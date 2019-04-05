import defaultFamilies from './default.json';
import indoEuropeanFamilies from './indo-european.json';
import centumFamilies from './centum.json';
import satemFamilies from './satem.json';

import taxons from './taxons.json';
import history from './history';
import descriptions from './descriptions';

export default Promise.resolve(
  [].concat(
    defaultFamilies,
    indoEuropeanFamilies,
    centumFamilies,
    satemFamilies,
  ).map(family => ({
    id: family.slug,
    // name: item.name,
    children: [],
    history: history[family.slug],
    description: descriptions[family.slug],
    taxon: taxons[family.level],
    link: `/group/${family.slug}`,
    ...family,
  })),
);

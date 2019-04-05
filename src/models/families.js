import families from './data/families';
import languages from './languages';

const bySlug = slug => families
  .then(data => data.find(item => item.slug === slug));
const byParent = slug => families
  .then(data => data.filter(item => item.parent === slug));
const getChildren = (family) => {
  if (!family) return null;

  return Promise.all([
    byParent(family.slug),
    languages.byGroup(family.slug),
  ])
    .then(response => ({
      ...family,
      children: [].concat(...response),
    }));
}

export default {
  // getAll: () => families,
  bySlug,
  byParent,
  withChildren: slug => bySlug(slug).then(getChildren),
};

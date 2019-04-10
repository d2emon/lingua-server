import slangs from './data/slangs';
import words from './words';

const getWords = (slang) => {
  if (!slang) return [];

  return words.bySlang(slang.slug)
    .then((items) => {
      const dictionary = slang.dictionary || {};
      dictionary.items = items;
      console.log(slang.slug, dictionary);
      return {
        ...slang,
        dictionary,
      };
    });
};

const getSubslangs = (slang) => {
  if (!slang) return [];

  return slangs
    .then(data => data.filter(item => item.parent === slang.slug))
    .then(subslangs => ({ ...slang, subslangs }));
};

export default {
  all: () => slangs
    .then(data => data.filter(item => !item.parent))
    .then(data => data.map(slang => ({
      ...slang,
      text: undefined,
      appendix: undefined,
      dictionary: undefined,
      links: undefined,
    }))),
  bySlug: slug => slangs
    .then(data => data.filter(item => item.slug === slug))
    .then(data => (data && data.length > 0 ? data[0] : null))
    .then(getWords)
    .then(getSubslangs),
  // byGroup: slug => slangs
  //   .then(data => data.filter(item => item.group === slug)),
};

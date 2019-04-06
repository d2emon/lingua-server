import slangs from './data/slangs';

export default {
  all: () => slangs
    .then(data => data.map(slang => ({
      ...slang,
      text: undefined,
      appendix: undefined,
    }))),
  bySlug: slug => slangs
    .then(data => data.filter(item => item.slug === slug))
    .then(data => (data && data.length > 0 ? data[0] : null) ),
  // byGroup: slug => slangs
  //   .then(data => data.filter(item => item.group === slug)),
};

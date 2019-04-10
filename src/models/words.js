import words from './data/words';

export default {
  all: () => words,
  bySlang: slang => words
    .then(data => data.filter(item => item.slang === slang)),
};

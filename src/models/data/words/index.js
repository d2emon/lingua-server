import boyarWords from './boyar';
import gamerWords from './gamer';
import lurkWords from './lurk';
import mudWords from './mud';

export default Promise.resolve(
  [].concat(
    boyarWords,
    gamerWords,
    mudWords,
    lurkWords,
  ).map((word, id) => ({
    id: id + 1,
    ...word,
  })),
);

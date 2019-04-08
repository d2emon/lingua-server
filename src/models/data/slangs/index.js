import boyarSlang from './boyar';
import gamerSlang from './gamer';
import lurkSlang from './lurk';

export default Promise.resolve(
  [].concat(
    boyarSlang,
    gamerSlang,
    lurkSlang,
  ).map((slang, id) => ({
    id: id + 1,
    link: `/slang/${slang.slug || (id + 1)}`,
    ...slang,
  })),
);

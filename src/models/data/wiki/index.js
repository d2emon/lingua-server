import languages from './languages';
import phraseology from './phraseology';
import translation from './translation';
import idioms from './idioms';

export default Promise.resolve([].concat(
  languages,
  phraseology,
  translation,
  idioms,
));

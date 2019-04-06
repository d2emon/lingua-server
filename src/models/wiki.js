// import fs from 'fs';
// import config from '../config';
import wiki from './data/wiki';

// const { folders, pageTitles } = config;
// const { wiki } = folders;

// const pageData = (link, text) => ({
//   title: pageTitles[link] || link,
//   link: `/${link}`,
//   text,
// });

/*
  all: () => new Promise((resolve, reject) => {
    fs.readdir(wiki, (err, files) => {
      if (err) return reject(err);
      // files = files.filter(file => !file.startsWith('.'));
      // files = files.filter(file => slugs.indexOf(file) < 0);
      // files = files.filter(file => fs.lstatSync(`${dataFolder}/${file}`).isDirectory());
      // files.filter(file => file.startsWith(letter))
      return resolve(files.map((filename) => {
        const link = filename.split('.').slice(0, -1).join('.');
        return pageData(link);
      }));
    });
  }),

 */

const bySlug = slug => wiki
  .then(data => data.find(item => item.slug === slug));
/*
  find: filename => new Promise((resolve, reject) => {
    fs.readFile(`${wiki}/${filename}.md`, 'utf8', (err, text) => {
      if (err) return reject(err);
      return resolve(pageData(filename, text));
    });
  }),
 */

export default {
  all: () => wiki,
  bySlug,
};

import hello from './hello';
import deepClone from '../lib/deepclone';
import exportFile from '../lib/exportFile';
import download from '../lib/download';
import noFakeParams from '../lib/noFakeParams';
import flatArray from '../lib/Array/flat';
import fixed from '../lib/Math/fixed';
import formatDate from './formatDate';
import { getCookies, clearCookies } from '../lib/siteData/cookie';
import trim from './internal/trim';
import isEmpty from './internal/isEmpty';

const utils = {
  hello,
  deepClone,
  exportFile,
  download,
  noFakeParams,
  flatArray,
  fixed,
  formatDate,
  getCookies,
  clearCookies,
  trim,
  isEmpty
}

export default utils
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
import getQuery from './UrlQuery/getQuery';
import getAllQueries from './UrlQuery/getAllQuery';
import serialQuery from './UrlQuery/serialQuery';
import replaceQuery from './UrlQuery/replaceQuery';

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
  isEmpty,
  getQuery,
  getAllQueries,
  serialQuery,
  replaceQuery
}

export default utils
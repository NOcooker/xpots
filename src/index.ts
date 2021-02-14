import hello from './hello';
import deepClone from './deepclone';
import exportFile from './exportFile';
import download from './download';
import noFakeParams from './noFakeParams';
import flatArray from './Array/flat';
import fixed from './Math/fixed';
import formatDate from './formatDate';
// import { getCookies, clearCookies } from './SiteData/cookie';
import trim from './internal/trim';
import isEmpty from './internal/isEmpty';
import getQuery from './UrlQuery/getQuery';
import getAllQueries from './UrlQuery/getAllQueries';
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
  // getCookies,
  // clearCookies,
  trim,
  isEmpty,
  getQuery,
  getAllQueries,
  serialQuery,
  replaceQuery
}

export default utils
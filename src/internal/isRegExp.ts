import whatsType from './whatsType';

function isRegExp(obj: any): boolean {
  return whatsType(obj, 'RegExp');
}

export default isRegExp;
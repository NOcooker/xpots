import whatsType from './whatsType';

function isObject(obj: any): boolean {
  return whatsType(obj, 'Object');
}

export default isObject;

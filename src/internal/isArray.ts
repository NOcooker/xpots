import whatsType from './whatsType';

function isArray(obj: any): boolean {
  return whatsType(obj, 'Array');
}

export default isArray;
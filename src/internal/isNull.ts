import whatsType from './whatsType';

function isNull(obj: any): boolean {
  return whatsType(obj, 'Null');
}

export default isNull;
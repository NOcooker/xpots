import whatsType from './whatsType';

function isDate(obj: any): boolean {
  return whatsType(obj, 'Date');
}

export default isDate;

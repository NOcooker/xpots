import whatsType from './whatsType';

function isFunction(obj: any): boolean {
  return whatsType(obj, 'Function');
}

export default isFunction;

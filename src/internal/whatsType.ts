
function whatsType(obj: any, type: string): boolean {
  return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

export default whatsType;
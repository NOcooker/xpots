import trim from "./trim";

function isEmpty(value: any): boolean {
  return (
    !value
    || value === undefined
    || trim(value) === ''
    || trim(value) === 'null'
    || value === ''
    || value.length === 0
  );
}

export default isEmpty;
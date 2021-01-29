function trim(str: string) {
  return str
    ? String(str).replace(/(^\s+)|(\s+$)/g, '')
    : str;
}

export default trim;
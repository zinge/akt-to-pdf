export const hasValues = items => {
  if ((typeof items === 'object') && (items !== null)) {
    return !!Object.keys(items).length
  }

  return !!items.length
}

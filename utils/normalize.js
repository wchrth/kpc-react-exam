export const normalizeMoney = (value, previousValue) => {
  if (!value) return value
  if (isNaN(value)) return previousValue
  if (value[0] === '0') return previousValue
  if (value.split('.')[1] && value.split('.')[1].length > 2)
    return previousValue
  return value
}

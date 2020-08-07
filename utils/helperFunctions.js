export function getTopDomain (url) {
  const a = document.createElement('a')
  a.href = url
  return a.hostname
}

export function intToString (value) {
  const suffixes = ['', 'k', 'm', 'b', 't']
  const suffixNum = Math.floor(('' + value).length / 3)
  let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2))
  shortValue = shortValue.toFixed(1)
  return shortValue + suffixes[suffixNum]
}

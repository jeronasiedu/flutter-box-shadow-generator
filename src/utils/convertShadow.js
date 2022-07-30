const sliceIntoChunks = (splitShadow) => {
  const results = []
  while (splitShadow.length > 0) {
    let chunk = splitShadow.splice(0, 5)
    results.push(chunk)
  }
  return results
}
const massageShadow = (separatedShadow) => {
  const results = []
  const regex =
    /rgba?\((\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*)((?:,\s*[0-9.]*\s*)?)\)/
  separatedShadow.forEach((item) => {
    const color = item[0].replace(regex, 'Color.fromRGBO')
    const xOffset = item[1].replace('px', '')
    const yOffset = item[2].replace('px', '')
    const blurRadius = item[3].replace('px', '')
    const spreadRadius = item[4].replace('px', '')

    const shadow = {
      color,
      blurRadius,
      spreadRadius,
      offset: {
        xOffset,
        yOffset,
      },
    }
    results.push(shadow)
  })
  return results
}
const convertShadow = (shadow) => {
  const splattedShadow = shadow.split(/ (?![^(]*\))/)
  const chunkedShadows = sliceIntoChunks(splattedShadow)
  return massageShadow(chunkedShadows)
}
export default convertShadow

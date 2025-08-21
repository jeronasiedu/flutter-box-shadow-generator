const sliceIntoChunks = (splitShadow) => {
  const results = []

  // Various splitShadow's don't have spreadRadius in them.
  // Using the regex `chunkSplitRefgex` the splitting is enhanced
  while (splitShadow.length > 0) {
    const chunkSplitRegex = /px|%/;
    const chunkSize = chunkSplitRegex.test(splitShadow[4] || '') ? 5 : 4;
    const chunk = splitShadow.splice(0, chunkSize);
    results.push(chunk)
  }
  return results
}
const massageShadow = (separatedShadow) => {
  const results = []
  separatedShadow.forEach((item) => {
    const color = item[0].replace('rgba', 'Color.fromRGBO')
    const xOffset = item[1].replace('px', '')
    const yOffset = item[2].replace('px', '')
    const blurRadius = item[3].replace('px', '')
    const spreadRadius = item[4]?.replace('px', '')

    const shadow = {
      color,
      blurRadius,
      spreadRadius: spreadRadius || 0,
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
  const splattedShadow = shadow.split(/[, ]+(?![^(]*\))/) // Change in regex to exclude an extra comma after a shadow.
  const chunkedShadows = sliceIntoChunks(splattedShadow)
  const results = massageShadow(chunkedShadows)
  return beautifyShadow(results)
}
function beautifyShadow(results) {
  const htmlTemplate = results.map((item) => {
    const { xOffset, yOffset } = item.offset
    return `BoxShadow(
    color: ${item.color},
    blurRadius: ${item.blurRadius},
    spreadRadius: ${item.spreadRadius}, // A comma was missing here
    offset: Offset(
      ${xOffset},
      ${yOffset},
    ),
  ),
`
  })
  const finalShadow = `boxShadow: [
    ${[...htmlTemplate].join(' ')}]`
  return finalShadow
}
export default convertShadow

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
  const splattedShadow = shadow.split(/ (?![^(]*\))/)
  const chunkedShadows = sliceIntoChunks(splattedShadow)
  const results = massageShadow(chunkedShadows)
  return beautifyShadow(results)
}
function beautifyShadow(results) {
  const htmlTemplate = results.map((item) => {
    const { xOffset, yOffset } = item.offset
    return `boxShadow(
          color: ${item.color},
          blurRadius: ${item.blurRadius},
          spreadRadius: ${item.spreadRadius},
          offset: Offset(
             ${xOffset},
             ${yOffset},
          ),
       ),
       `
  })
  const finalShadow = `BoxShadow:[
    ${[...htmlTemplate].join('')}
]
  `
  return finalShadow
}
export default convertShadow

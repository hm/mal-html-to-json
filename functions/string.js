const removeLineBreaks = (str) => str.replace(/(\r\n\t|\n|\r\t)/gm,"").trim()
const ignoreNonNumeric = (str) => str.replace(/\D/g, '').trim()
const getLastNumber    = (str) => str.split(' ')[str.split(' ').length - 1]
const getStringBetween = (str, firstChar, lastChar) => 
  str.substring(str.lastIndexOf(firstChar) + 1, str.lastIndexOf(lastChar))

module.exports = {
  removeLineBreaks,
  ignoreNonNumeric,
  getLastNumber,
  getStringBetween
}
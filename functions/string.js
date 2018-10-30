const removeLineBreaks = (str) => str.replace(/(\r\n\t|\n|\r\t)/gm,"").trim()
const ignoreNonNumeric = (str) => str.replace(/\D/g, '').trim()
module.exports = { removeLineBreaks, ignoreNonNumeric }
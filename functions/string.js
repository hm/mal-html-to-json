const removeLineBreaks = (str) => str.replace(/(\r\n\t|\n|\r\t)/gm,"").trim()

module.exports = removeLineBreaks
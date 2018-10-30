const htmlToJson = require('html-to-json')
const {
  removeLineBreaks,
  ignoreNonNumeric,
  getLastNumber,
  getStringBetween
} = require('../functions/string')

const getAnimeList = async (query, limit) => {
  let url = `https://myanimelist.net/anime.php?q=${query}`
  if (limit) url += `&show=${limit}`
  return await htmlToJson.request(url, {
    animes: ['tr > td > a > strong', ($item, i) => {
      return {
        id:       ignoreNonNumeric($item.parent().attr('id')),
        title:    $item.text(),
        synopsis: $item.parent().parent().find('.pt4').text(),
        banner:   $item.parent().parent().prev().find('div.picSurround a img').attr('data-src'),
        type:     removeLineBreaks($item.parent().parent().next().text()),
        episodes: removeLineBreaks($item.parent().parent().next().next().text()),
        score:    removeLineBreaks($item.parent().parent().next().next().next().text())
      }
    }],
    current:  ($doc) => parseInt(getStringBetween($doc.find('.normal_header.clearfix .bgColor1').text(), '[', ']')),
    total:    ($doc) => parseInt(getLastNumber($doc.find('.normal_header.clearfix .bgColor1').text()))
  })
}


module.exports = getAnimeList
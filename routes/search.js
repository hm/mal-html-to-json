const htmlToJson = require('html-to-json')
const format = require('../functions/string')

const getAnimeList = async (query, limit) => {
  let url = `https://myanimelist.net/anime.php?q=${query}`
  if (limit) url += `&show=${limit}`
  return await htmlToJson.request(url, {
    animes: ['tr > td > a > strong', ($item, i) => {
      return {
        title:    $item.text(),
        synopsis: $item.parent().parent().text(),
        banner:   $item.parent().parent().prev().find('div.picSurround a img').attr('data-src'),
        type:     format($item.parent().parent().next().text()),
        episode:  format($item.parent().parent().next().next().text()),
        score:    format($item.parent().parent().next().next().next().text()),
      }
    }]
  })
}


module.exports = getAnimeList
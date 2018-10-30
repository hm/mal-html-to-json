const htmlToJson = require('html-to-json')

const getAnimeList = async (url) =>
  await htmlToJson.request(`https://myanimelist.net/anime.php?q=${url}`, {
    animes: ['tr > td > a > strong', ($item, i) => {
      return $item.text()
    }]
  })

module.exports = getAnimeList
const htmlToJson = require('html-to-json')

const getAnime = async (url) =>
  await htmlToJson.request(`https://myanimelist.net/anime${url}`, {
    title:      ($doc) => $doc.find('h1').text(),
    banner:     ($doc) => $doc.find(`img[itemprop="image"]`).attr('src'),
    score:      ($doc) => $doc.find(`span[itemprop="ratingValue"]`).text(),
    scoredBy:   ($doc) => $doc.find(`span[itemprop="ratingCount"]`).text(),
    type:       ($doc) => $doc.find(`span:contains('Type:')`).next().text(),
    popularity: ($doc) => $doc.find(`span:contains('Popularity ')`).text().replace(/\D/g,''),
    synopsis:   ($doc) => $doc.find(`span[itemprop="description"]`).text(),
    episodes:   ($doc) => $doc.find(`span:contains('Episodes:')`).parent().text().replace(/\D/g,''),
    status:     ($doc) => $doc.find(`span:contains('Status:')`).parent().find('span').remove().end().text().replace(/\r?\n|\r/g, '').trim(),
  })

module.exports = getAnime
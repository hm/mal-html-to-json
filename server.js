const express = require('express')
const app = express()
const getAnime = require('./routes/anime')
const getAnimeList = require('./routes/search')

app.get('/:animeID', async (req, res) =>
  res.json(await getAnime(req.url))
)

app.get('/search/:Query', async (req, res) =>
  res.json(await getAnimeList(req.url))
)

app.listen(3000)

console.log('listening on port 3000')
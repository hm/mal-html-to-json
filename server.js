const express = require('express')
const app = express()
const getAnime = require('./routes/anime')
const getAnimeList = require('./routes/search')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/:animeID', async (req, res) =>
  res.json(await getAnime(req.url))
)

app.get('/search/:query/:limit?', async (req, res) =>
  res.json(await getAnimeList(req.params.query, req.params.limit))
)

app.listen(3000)

console.log('listening on port 3000')
# mal-html-to-json

GET /:malAnimeID

json data at given (myanimelist)AnimeID in this format:
```
{
  title,
  banner,
  score,
  scoredBy,
  type,
  popularity,
  synopsis,
  episodes,
  status
}
```

GET /search/:query/:limit?

json data of anime array of all animes matching search query

limit is optional, number of shows skipped, increments by 50

in this format:
```
{
  animes: [
    {
      id,
      title,
      banner,
      score,
      type,
      episodes,
      synopsis
      }
  ]
}
```

# mal-html-to-json

GET /:malAnimeID

json data at given (myanimelist)AnimeID in this format:
```
{
  title,
  banner,
  synopsis,
  type,
  episodes,
  status,
  aired,
  producers: [],
  licensors: [],
  studios: [],
  source,
  genres: [],
  duration,
  rating,
  score,
  scored_by,
  ranked,
  popularity,
  members,
  favorites,
  related: {
    adaptation: []
    prequel: [],
    sequel: [],
    side_story: []
  },
  characters: [
    {
      char_img,
      char_name,
      char_type,
      actor_img,
      actor_name,
      actor_type
    }
  ]
  
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
  ],
  current,
  total
}
```

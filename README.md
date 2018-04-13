# BTC-alarm
Cli that plays a song every time btc values changes based on [Silicon Valley](https://www.youtube.com/watch?v=gz7IPTf1uts)

## How to run it

- Install the dependencies 

```bash
$ npm install
```

- Add an `.mp3` song to the project directory

- Add the environment variables

```bash
cp .env.sample .env
```

And edit the `.env` file in my case

```
SONG_PATH="you_suffer.mp3"
```

## Run it

```bash
$ node index.js
```



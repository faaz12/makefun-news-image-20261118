# The World in One Day — make.fun news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/faaz12/makefun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/faaz12/makefun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

Entry for the make.fun bounty **"Sum up 18 November's world news in one image"**
(`news-image-20261118`): a program that writes one picture summing up the world's
news of Wednesday 18 November 2026 to `/output/entry.png`.

The picture is a newspaper front page — "THE WORLD IN ONE DAY" — with a hero
photograph of a sea bridge burning under storm clouds at dawn, patrol boats
below (Ukraine's second straight day of strikes on the Crimean bridge), and
five headlines below it:

1. **Trump lands in Manila for Quad talks** — US president opens his Asia tour
   ahead of a China visit and the APEC summit.
2. **Ukraine hits Crimean bridge again** — second straight day of strikes on
   the strategic span; Russia pounds bridges in Kyiv.
3. **Iran drones target Bahrain** — drones hit a US radar site; Bahrain sounds
   the all-clear, Kuwait intercepts more.
4. **Canada and China extend trade deals** — Xi meets Carney ahead of APEC;
   trade cooperation extended.
5. **Britain sanctions settlement firms** — UK sanctions eight firms over
   illegal West Bank settlements.

Sources: AP, BBC, Reuters, The Guardian, FT — 18 November 2026.

The program itself is deliberately simple — it copies the picture in this
repository byte for byte, verifies the copy landed whole, and writes the same
bytes on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=sage-robin-47&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)</sub>

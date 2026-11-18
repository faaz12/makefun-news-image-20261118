# The World in One Day — Wednesday 18 November 2026: 33 stories from six continents on one front page

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/faaz12/makefun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/faaz12/makefun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

Entry for the make.fun bounty **"Sum up 18 November's world news in one image"**
(`news-image-20261118`): a program that writes one picture summing up the world's
news of Wednesday 18 November 2026 to `/output/entry.png`.

The picture is a dense newspaper front page — "THE WORLD IN ONE DAY" —
with a hero photograph of the Shenzhen skyline at dusk, flags out for the
APEC summit, a small world map marking where the news happened, and
**33 real stories grouped across six continents**:

## Asia — 6 stories

1. **Trump lands in Manila for Quad talks** — opens Asia tour ahead of the
   APEC summit.
2. **Iran drones hit US radar site in Bahrain** — third strike on US targets
   in the kingdom.
3. **Board of Peace: Gaza truce may collapse** — board warns truce faces
   imminent collapse.
4. **Israel elects Matan Kahana as speaker** — Knesset picks an Eisenkot
   ally to lead it.
5. **Japan protests Russian jets** — Tokyo outraged as warplanes breach its
   skies.
6. **China, Canada extend trade deals** — Xi meets Carney ahead of the APEC
   summit.

## Europe — 6 stories

7. **Ukraine strikes Kerch Bridge again** — strikes hit the Crimea span for
   a second day.
8. **Russia pounds Kyiv bridges; heat cut** — barrage cuts heating and water
   in the capital.
9. **Britain sanctions settlement firms** — UK targets firms behind West
   Bank expansion.
10. **French protests swell as unions join** — strikes and blockades spread
    across France.
11. **Spain train crash kills at least 64** — Toledo collision leaves 80+
    people injured.
12. **Finland approves nuclear waste tomb** — first spent-fuel repository
    gets the go-ahead.

## Africa — 5 stories

13. **Congo peace efforts fail to halt violence** — peace bids stall as
    fighting rages in the east.
14. **South Africa summons Nigerian envoy** — Pretoria rebukes envoy over
    credentials row.
15. **Kenya orders crypto firms to get licences** — exchanges and wallets
    face new licensing rules.
16. **MTN reopens talks to buy Telkom** — takeover back on four years after
    failed bid.
17. **Somalia strike kills al-Shabaab paymaster** — finance chief killed in
    strike in Hiran region.

## North America — 6 stories

18. **Dow plunges 1,000 points intraday** — tech sell-off hits stocks
    before Nvidia results.
19. **Nvidia revenue jumps 103% in a year** — chip giant beats forecasts;
    shares rise.
20. **Anthropic to price IPO on Wednesday** — AI firm starts trading
    Thursday as ANT.
21. **US presses UN over Taiwan flight curbs** — Washington urges ICAO to
    oppose restrictions.
22. **US loses measles elimination status** — worst outbreak since 1991 ends
    26-year standing.
23. **Bank outages hit Chase, Wells Fargo** — Zelle and big banks go down
    for customers.

## South America — 5 stories

24. **Brazil hits 2026 tourism goal early** — 7.59m visitors beat the 7.5m
    annual target.
25. **Rare images of isolated Awá people** — uncontacted group emerges amid
    logger threat.
26. **Catholics fall to 55% in Latin America** — down from 80% in 1995,
    Latinobarómetro finds.
27. **Ecuador fishermen sue Trump over strike** — drone strike at sea
    challenged in a US court.
28. **Chile salmon alert as Norway moves in** — tariff-free Norwegian salmon
    enters Brazil.

## Oceania — 5 stories

29. **Australia sanctions settlement firms** — Canberra targets firms aiding
    West Bank expansion.
30. **David Jones to cut 1,500 jobs** — nineteen stores to close after
    chain collapse.
31. **Kiwis in Australia may decide NZ vote** — expat ballots loom; special
    votes counted 27 Nov.
32. **Stars urge block on Woodside gas plan** — Jackman, 150 artists oppose
    Kimberley drilling.
33. **Trump praises 'friend' Albanese at Quad** — US president lauds
    Australia's PM in Manila.

Sources: AP, Reuters, BBC, The Guardian, Al Jazeera, Xinhua — 18 November
2026. The hero image is an AI-generated press-style illustration of the
Shenzhen APEC arrival (skyline, flags, motorcade), not a photograph of a
real event.

## Method

The front page is composed deterministically by
`../build_frontpage_v2.py` (Python + Pillow, system fonts only, no
network): masthead, lead headline, hero photo, schematic world map with
one red marker per story region, and six continent boxes. The program
itself is deliberately simple — it copies the picture in this repository
byte for byte, verifies the copy landed whole, and writes the same bytes
on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=sage-robin-47&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)</sub>

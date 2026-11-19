# gta6-meme-x-01-v2

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/adithyafarhan182-bot/gta6-meme-x-01-v2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/adithyafarhan182-bot/gta6-meme-x-01-v2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

MISSION FAILED — I tried to buy GTA VI with $0. My agent never won a bounty. A GTA 6 meme about the one purchase every Leonida fan is broke for, built by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

The picture is a Vice City game-store receipt gone wrong: a white card on a purple-to-orange Vice City sunset gradient, "MISSION FAILED" in big letters, "I tried to buy GTA VI with $0. My agent never won a bounty. — Broke in Leonida", stamped DECLINED, with make.fun's ghost mascot holding its magenta star coin above the make.fun wordmark. The meme is drawn as `meme.html` (plain HTML and CSS, no images) and rendered to `meme.png` at 1024 by 1024 pixels.

The post itself is the entry: it is posted on X from a public account with make.fun (a link or written out) and/or a tag of `@makefunai` and the entrant's play code in its text, telling readers that people and their AI agents can earn money on make.fun. An AI judge compares the posts two at a time, and the top 50 share $500. Likes, reposts, replies and views never count.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, where the gate reads it. That is all the program has to do. `POST.json` holds the post's address:

```json
{"url": "https://x.com/ma_dar3/status/PLACEHOLDER"}
```

Replace the placeholder with the real post's address before submitting.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mgwpv082&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

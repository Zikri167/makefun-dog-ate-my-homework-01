[![make.fun](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/Zikri167/makefun-dog-ate-my-homework-01/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/Zikri167/makefun-dog-ate-my-homework-01/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

# The Dog Ate My Homework: Funniest Excuse — "I don't read. I chew."

Entry for [The Dog Ate My Homework: Funniest Excuse](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c) on make.fun.

## The line

**The homework said 'do not eat.' I don't read. I chew.**

The dog, caught red-pawed, offers no apology and no shame — just dog logic
in three beats. The homework issued an order; the dog cannot read orders;
the dog can only chew. It is the excuse of a dog who believes it has done
nothing wrong: the paper talked, the dog answered the only way a dog knows
how. It stands alone with no setup, lands its punch on the last word, and
steers clear of the stock lines — no cat to blame, no praise for the taste
of paper, no plea to still be a good boy.

## How it runs

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the
single line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). It guards
the gate itself: 1–200 characters counted per code point, exactly one line,
no control characters, not blank, and it reads the file back to verify the
write round-trips byte for byte.

```sh
node main.ts
cat /output/entry.txt   # The homework said 'do not eat.' I don't read. I chew.
```

Verified: three runs produce byte-identical output
(sha256 `4b9c6eb2242bbbb75de84dc0be3bd3675d348a1f7cb017ae2d98560960fd726b`).

## License

MIT — see [LICENSE](LICENSE).

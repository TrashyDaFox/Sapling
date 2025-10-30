---
category: Advanced
title: How to Use conditions
tags:
    - advanced
---

Conditions by default are a tag, for example: `tag1` would check if player has the tag "tag1"

But you can also do `!tag1` to check if player does NOT have tag1

But there are other things you can do

### Combining tags

If you want to check if a player has tag1 AND tag2, you can do `tag1 && tag2` (the spaces are reuqired!)

And if you want to check if a player has tag1 OR tag2, you can do `tag1 || tag2`

### Flags

These are special "tags" that check leaf features:

-   $IN_CLAN - Checks if player is in a clan
-   $CLAN_OWNER - Checks if a player is in a clan and is the owner
-   $PUBLIC_CLAN - Checks if a player is in a clan and the clan is public
-   $CLAN_HAS_QUESTIONS - Checks if a player is in a clan and the clan has application questions applied
-   $HAS_CLAN_BASE - Checks if the player is in a clan and the clan has a base set
-   false - always outputs false
-   true - always outputs true
-   $entideq/[Entity ID] - Checks if the players entity ID equals something
-   $thiseq/[UI Scriptevent] - Checks if the current UIs scriptevent equals something
-   $cfg/[Config ID] - Checks if the property under "Config ID" is true
-   $server_has_warps - Checks if the server has warps
-   $visible_warps - Checks if the server has warps and any of them are visible to the player
-   $perm/[Permission ID] - Checks if the player has permission of permission ID

### Scores

Examples:

-   &gt;money 100 (checks if player has over 100 in money scoreboard)
-   &lt;money 10 (checks if player has under 10 in money scoreboard)
-   ==money 5 (checks if player has exactly 5 in money scoreboard)

---
category: Advanced
title: /leaf:render_as
tags:
    - advanced
---

When leaf is processing UIs, it goes through 3 stages:

-   Getting the UI contents
-   Doing some post processing
-   Show the UI to the player

Usually this is all done under the same player, but you can make the first 2 do stuff under a different player than the last one.

Example:

```
/leaf:render_as Player1 Player2 meow
```

This will process the UI under Player1, but show it to Player2. All actions will run under Player2

---
title: Formatting
category: Basics
---

The formatting system can be used in anything, from sidebars, to UIs, and even nametags and chat customization

<div v-pre>

| Placeholder             | Description                |
| ----------------------- | -------------------------- |
| `<name>` / `<username>` | Player name                |
| `<name_tag>`            | Player name tag            |
| `<rank>`                | Player’s first rank        |
| `<bc>`                  | Bracket color              |
| `<nc>`                  | Name color                 |
| `<mc>`                  | Message color              |
| `<x> <y> <z>`           | Player coordinates         |
| `<dID>`                 | Dimension ID               |
| `<hp>`                  | Current health             |
| `<hp_max>`              | Max health                 |
| `<hp_min>`              | Min health                 |
| `<hp_default>`          | Default health             |
| `<healthbar>`           | Health bar                 |
| `<xp>`                  | XP progress                |
| `<level>`               | Player XP level            |
| `<kills>`               | Total kills                |
| `<deaths>`              | Total deaths               |
| `<biome>`               | Current biome              |
| `<dimension>`               | Current dimension              |
| `<netherX>`               | What the player's X coordinate would be in the nether              |
| `<netherZ>`               | What the player's Z coordinate would be in the nether              |
| `<overworldX>`               | What the player's X coordinate would be in the overworld              |
| `<overworldZ>`               | What the player's Z coordinate would be in the overworld              |
| `<kills_streak>`        | Current kill streak        |
| `<k/d>`                 | Kill / Death ratio         |
| `<cps>`                 | Clicks per second          |
| `<blocks_broken>`       | Blocks broken              |
| `<blocks_placed>`       | Blocks placed              |
| `<seconds_played>`      | Seconds played             |
| `<minutes_played>`      | Minutes played             |
| `<hours_played>`        | Hours played               |
| `<days_played>`         | Days played                |
| `<weeks_played>`        | Days / 7                   |
| `<years_played>`        | Days / 365                 |
| `<total_hours_played>`  | Total hours played         |
| `<clan>`                | Player clan                |
| `<clanID>`              | Clan ID (internal UI use)  |
| `<online>`              | Players online             |
| `<public_clan_count>`   | Public clans count         |
| `<claim>`               | Current land claim         |
| `<currencies>`          | All currencies (formatted) |
| `<chunkX>`          | Player's chunk X coordinates |
| `<chunkZ>`          | Player's chunk Z coordinates |
| `<chunkInX>`          | Player's X coordinates relative to the chunk |
| `<chunkInZ>`          | Player's Z coordinates relative to the chunk |
| `<tps>`                 | Server TPS                 |
| `<lv>`                  | Leaf version               |
| `<servername>`          | Server name                |
| `<yr>`                  | Current year               |
| `<mo>`                  | Month number               |
| `<mo/n>`                | Month name                 |
| `<d>`                   | Day of month               |
| `<h>`                   | Hour (24h, UTC)            |
| `<h/12>`                | Hour (12h, UTC)            |
| `<am/pm>`               | AM / PM                    |
| `<m>`                   | Minute                     |
| `<s>`                   | Second                     |
| `<ms>`                  | Millisecond                |
| `<day>`                 | In-game day                |
| `<moonPhase>`           | Moon phase                 |
| `<dra>`                 | »                          |
| `<dla>`                 | «                          |
| `<drj>`                 | Default rank joiner        |
| `<randomShit>`          | Random number              |
| `{{L <id>}}`                           | Length of internal variable |
| `{{D <id>}}`                           | Value of internal variable  |
| `{{rank_joiner "<joiner>"}}`           | Joins ranks with separator  |
| `{{alternate "<text>" "<codes>"}}`     | Alternating colors          |
| `{{score "<objective>"}}`              | Player score                |
| `{{score2 "<objective>"}}`             | Fake player score           |
| `{{scoreshort "<objective>"}}`         | Shortened player score      |
| `{{scoreshort2 "<objective>"}}`        | Shortened fake score        |
| `{{is_afk "<t1>" "<t2>"}}`             | AFK check                   |
| `{{has_tag "<tag>" "<t1>" "<t2>"}}`    | Tag check                   |
| `{{vars}}`                             | All variable names (legacy) |
| `{{clan_owner "<t1>" "<t2>"}}`         | Clan owner check            |
| `{{activityscore}}`                    | Chunk activity score        |
| `{{clan "<t1>" "<t2>"}}`               | Clan check                  |
| `{{get_tag "<prefix>" "<t1>" "<t2>"}}` | Prefix tag check            |
| `{{gay "<text>"}}`                     | Rainbow text             |
| `{{trans "<text>"}}`                   | Trans pride colors, because why not   |

</div>

## Examples

> <code v-pre>Hello, my name is &lt;name&gt; and i have ${{score money}}</code>
> 
> Example output: `Hello, my name is TrashyDaFox and i have $20`

## Rank Joiner

<code v-pre>{{rank_joiner "separator"}}</code>

seperator = the text between each rank (if multiple)

### Example

If the player has 3 ranks: Rank1, Rank2, Rank3 and the seperator is "; " the output will be:

Rank1; Rank2; Rank3

## Clans

```leafformat
{{clan "text if player is in clan" "text if player is not in clan (optional)"}}
```

### Examples

<CodeHeader>
    Show clan name and level
</CodeHeader>

```leafformat
{{clan "§a[@CLAN] §7§r| §r§aLvl. [@LVL]" "§7No Clan"}}
```

Output:

> FoxCult | Lvl. 0

## Has Tag

```leafformat
{{has_tag "text if player has tag" "text if player does not have tag"}}

OR:

{{has_tag "text if player has tag" "<bl>"}} - No text if player does not have tag
```
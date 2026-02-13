---
title: Leaf Tell
category: Utilities
---

Leaf has 2 commands for sending raw mesasages

## /leaf:tell_formatted

Usage: `/leaf:tell_formatted <player> <message>`

This will send a message to a player using [leaf formatting](/customizer/formatting)

If this command is sent by a player, `player2` in the formatting will be whoever sent the command. player1 is always the player receiving the message

For some reason putting `\n` in the message doesnt work, so you have to put `\\n`. The cause for this behavior is currently unknown

## /leaf:tell_formatted_channel

This command works similarly to `/leaf:tell_formatted` but works with [leafs channels](/chat/channels)

Usage: `/leaf:tell_formatted_channel <channel> <message> [origin_pos]`

`<channel>` is the Channel ID, and `<message>` is the message

`[origin_pos]` is optional, and only useful if local mode is set up on the channel
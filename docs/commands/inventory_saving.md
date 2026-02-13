---
title: Inventory Saving
category: Utilities
---

## Saving/Loading

To save a players inventory, you can do either of these:

```
/leaf:save_inv_player <player> <name>
/leaf:save_inv_global <player> <name>
```

For loading, you can do:

```
/leaf:load_inv_player <player> <name>
/leaf:load_inv_global <player> <name>
```

examples:

```
/leaf:save_inv_player TrashyDaFox inventory1
/leaf:save_inv_player @a kitpvp
/leaf:load_inv_global @a[r=10] meow
```

## Global and Player inventories

Global will save the inventory to a global name, while player is separated per player

They will be saved separately, so you can have a global inventory with the same name as some players inventory, so you cant have mismatched player/global saving/loading

## Use cases

With [Zones](/zones) you can have [On Enter & On Exit](/zones/oncommands) commands to give the illusion of separate inventories per area

This is the way I do the zones :3
```
On Enter:
/leaf:save_inv_player @s old
/leaf:load_inv_player @s new

On Exit:
/leaf:save_inv_player @s new
/leaf:load_inv_player @s old
```
this can be expanded on if you need multiple zones with different inventories :3

Note: `/clear` will NOT work in succession to saving; due to MC limitations, lots of leaf commands have to wait for the next tick, so `/clear` will run faster. Inventory loading will by default clear the inventory, so just use that to clear

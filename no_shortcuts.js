                   onEvent('item.registry', event => {
                       event.create('item_a').displayName('A')
                       event.create('item_b').displayName('B')
                       event.create('item_c').displayName('C')
                       event.create('item_d').displayName('D')
                       event.create('custom_textured_item_0').displayName('Special Textured Item').texture('maths_cba:custom_texture_0')
                       event.create('custom_textured_item_1').displayName('Special Textured Item').texture('maths_cba:custom_texture_1')
                       event.create('custom_textured_item_2').displayName('Special Textured Item').texture('maths_cba:custom_texture_2')
                       event.create('custom_textured_item_3').displayName('Special Textured Item').texture('maths_cba:custom_texture_3')
                       event.create('hammer_a').displayName('Hammer [A]').tier('tool_tier_a').attackDamageBaseLine(5.0)
                       event.create('knife_a').displayName('Knife [A}').tier('tool_tier_a').attackDamageBaseLine(7.0)
                       event.create('spear_a').displayName('Spear [A]').tier('tool_tier_a').attackDamageBaseLine(3.0)
                       event.create('hammer_b').displayName('Hammer [B]').tier('tool_tier_b').attackDamageBaseLine(7.0)
                       event.create('knife_b').displayName('Knife [B]').tier('tool_tier_b').attackDamageBaseLine(9.0)
                       event.create('spear_b').displayName('Spear [B]').tier('tool_tier_b').attackDamageBaseLine(5.0)
                   })
                   onEvent('block.registry', event => {
                       event.create('metal_block_tough').material('metal').hardness(10.0).displayName('Metal Block [Hardness: Tough]')
                       event.create('metal_block_moderate').material('metal').hardness(5.0).displayName('Metal Block [Hardness: Moderate]')
                       event.create('metal_block_soft').material('metal').hardness(1.0).displayName('Metal Block [Hardness: Soft]')

                       event.create('wood_block_reinforced').material('wood').hardness(10.0).displayName('Reinforced Wooden Planks')
                       event.create('wood_block_strong').material('wood').hardness(5.0).displayName('Strong Wooden Planks')
                       event.create('wood_block_weak').material('wood').hardness(1.0).displayName('Weak Wooden Planks')

                       event.create('sturdy_stone').material('stone').hardness(10.0).displayName('Sturdy Stone')
                       event.create('weakened_stone').material('stone').hardness(5.0).displayName('Weakened Stone')
                       event.create('crumbling_stone').material('stone').hardness(1.0).displayName('Crumbling Stone')
                   })
                   ItemEvents.toolTierRegistry (event => {
                       event.add('tool_tier_a', tier => {
                           tier.uses = 100
                           tier.speed = 2.0
                           tier.attackDamageBonus = 2.0
                           tier.level = 2
                           tier.enchantmentValue = 2
                           tier.repairIngredient = 'maths_cba:item_a'
                       })
                       event.add('tool_tier_b', tier => {
                           tier.uses = 150
                           tier.speed = 3.0
                           tier.attackDamageBonus = 3.0
                           tier.level = 3
                           tier.enchantmentValue = 3
                           tier.repairIngredient = 'maths_cba:item_b'
                       })
                   })
let sI = ['A', 'B', 'C', 'D']
let ctI = ['0', '1', '2', '3']

onEvent('item.registry', event => {
    let simpleItem = (name) => {
        let id = name.toLowerCase()
        event.create('item_' + id).displayName('Item' + name)
    }
    let customTexturedItem = (name) => {
        let id = name.toLowerCase()
        event.create('custom_textured_item_' + id).displayName('Special Textured Item [' + name + ']').texture('maths_cba:custom_texture_' + id)
    }
    let hammer = (name, tier, BaseDamage) => {
        let id = name.toLowerCase()
        event.create('hammer_' + id).displayName('Hammer [' + name + ']').tier('tool_tier_' + tier).attackDamageBaseLine(BaseDamage)
    }
    let knife = (name, tier, BaseDamage) => {
        let id = name.toLowerCase()
        event.create('knife_' + id).displayName('Knife [' + name + ']').tier('tool_tier_' + tier).attackDamageBaseLine(BaseDamage)
    }
    let spear = (name, tier, BaseDamage) => {
        let id = name.toLowerCase()
        event.create('spear_' + id).displayName('Spear [' + name + ']').tier('tool_tier_' + tier).attackDamageBaseLine(BaseDamage)
    }
    sI.forEach(e => {
        simpleItem(e)
    })
    ctI.forEach(e => {
        customTexturedItem(e)
    })
    hammer('A', 'a', 5.0)
    hammer('B', 'b', 7.0)
    knife('A', 'a', 7.0)
    knife('B', 'b', 9.0)
    spear('A', 'a', 9.0)
    spear('B', 'b', 5.0)
})
    onEvent('block.registry', event => {
        let tieredBlockSet = (material, strength, hardness) => {
            let matId = material.toLowerCase()
            let srengthId = strength.toLowerCase()
            event.create(matId + '_block_' + srengthId).material(matId).hardness(hardness).displayName(material + ' Block [Hardness: ' + strength + ']')
        }
        tieredBlockSet('Metal', 'Tough', 10.0)
        tieredBlockSet('Metal', 'Moderate', 5.0)
        tieredBlockSet('Metal', 'Soft', 1.0)
        tieredBlockSet('Wood', 'Reinforced', 10.0)
        tieredBlockSet('Wood', 'Strong', 5.0)
        tieredBlockSet('Wood', 'Weak', 1.0)
        tieredBlockSet('Stone', 'Sturdy', 10.0)
        tieredBlockSet('Stone', 'Weakened', 5.0)
        tieredBlockSet('Stone', 'Crumbling', 1.0)
    })
ItemEvents.toolTierRegistry (event => {
    let toolTier = (id, uses, speed, aDB, level, eV, rI) => {
        event.add('tool_tier_' + id, tier => {
            tier.uses = uses
            tier.speed = speed
            tier.attackDamageBonus = aDB
            tier.level = level
            tier.enchantmentValue = eV
            tier.repairIngredient = rI
        })
    }
    toolTier('a', 100, 2.0, 2.0, 2, 2, 'maths_cba:item_a')
    toolTier('b', 150, 3.0, 3.0, 3, 3, 'maths_cba:item_b')
})
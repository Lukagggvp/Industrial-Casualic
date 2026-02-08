ServerEvents.recipes(e => {
	e.remove({ mod: 'ultimine_addition' });

	e.remove({ id: 'casting:melting/black_brick/from_clay_block' });
	e.remove({ output: Fluid.of('casting:molten_emerald') });
	e.remove({ output: Fluid.of('casting:molten_debris') });
	e.remove({ output: Fluid.of('casting:molten_lapis') });
	e.remove({ output: Fluid.of('casting:molten_redstone') });
	e.remove({ output: Fluid.of('casting:molten_electrum') });
	e.remove({ output: Fluid.of('casting:molten_coal') });
	e.remove({ output: Fluid.of('casting:molten_invar') });
	e.remove({ output: Fluid.of('casting:molten_ruby') });
	e.remove({ output: Fluid.of('casting:iced_water') });
	e.remove({ output: Fluid.of('casting:molten_certus_quartz') });
	e.remove({ output: Fluid.of('casting:molten_charged_certus_quartz') });
	e.remove({ output: Fluid.of('casting:molten_uranium') });
	e.remove({ output: Fluid.of('casting:molten_fluix') });
	e.remove({ output: Fluid.of('casting:molten_obsidian') });
	e.remove({ output: Fluid.of('casting:molten_stone') });
	e.remove({ output: Fluid.of('casting:molten_silicon') });
	e.remove({ output: Fluid.of('casting:molten_soul') });
	e.remove({ output: Fluid.of('casting:molten_blaze') });
	e.remove({ output: Fluid.of('casting:molten_bronze') });
	e.remove({ output: Fluid.of('casting:molten_sapphire') });
	e.remove({ output: Fluid.of('casting:molten_quartz') });
	e.remove({ output: Fluid.of('casting:molten_steel') });
	e.remove({ output: Fluid.of('casting:chilled_water') });
	e.remove({ output: Fluid.of('casting:molten_diamond') });
	e.remove({ output: Fluid.of('casting:molten_netherite') });
	e.remove({ output: Fluid.of('casting:molten_glowstone') });
	e.remove({ output: Fluid.of('casting:molten_glass') });
	e.remove({ output: Fluid.of('casting:molten_end_stone') });
	e.remove({ output: Fluid.of('casting:molten_ender') });
	
	e.remove({ id: 'casting:melting/nickel/from_dust' });
	e.remove({ id: 'casting:melting/platinum/from_dust' });
	e.remove({ id: 'casting:melting/gold/from_dust' });
	e.remove({ id: 'casting:melting/silver/from_dust' });
	e.remove({ id: 'casting:melting/zinc/from_dust' });
	e.remove({ id: 'casting:melting/iridium/from_dust' });
	e.remove({ id: 'casting:melting/copper/from_dust' });
	e.remove({ id: 'casting:melting/tin/from_dust' });
	e.remove({ id: 'casting:melting/lead/from_dust' });
	e.remove({ id: 'casting:melting/osmium/from_dust' });
	e.remove({ id: 'casting:melting/iron/from_dust' });

	e.remove({ input: Fluid.of('casting:molten_emerald') });
	e.remove({ input: Fluid.of('casting:molten_debris') });
	e.remove({ input: Fluid.of('casting:molten_lapis') });
	e.remove({ input: Fluid.of('casting:molten_redstone') });
	e.remove({ input: Fluid.of('casting:molten_electrum') });
	e.remove({ input: Fluid.of('casting:molten_coal') });
	e.remove({ input: Fluid.of('casting:molten_invar') });
	e.remove({ input: Fluid.of('casting:molten_ruby') });
	e.remove({ input: Fluid.of('casting:iced_water') });
	e.remove({ input: Fluid.of('casting:molten_certus_quartz') });
	e.remove({ input: Fluid.of('casting:molten_charged_certus_quartz') });
	e.remove({ input: Fluid.of('casting:molten_uranium') });
	e.remove({ input: Fluid.of('casting:molten_fluix') });
	e.remove({ input: Fluid.of('casting:molten_obsidian') });
	e.remove({ input: Fluid.of('casting:molten_stone') });
	e.remove({ input: Fluid.of('casting:molten_silicon') });
	e.remove({ input: Fluid.of('casting:molten_soul') });
	e.remove({ input: Fluid.of('casting:molten_blaze') });
	e.remove({ input: Fluid.of('casting:molten_bronze') });
	e.remove({ input: Fluid.of('casting:molten_sapphire') });
	e.remove({ input: Fluid.of('casting:molten_quartz') });
	e.remove({ input: Fluid.of('casting:molten_steel') });
	e.remove({ input: Fluid.of('casting:chilled_water') });
	e.remove({ input: Fluid.of('casting:molten_diamond') });
	e.remove({ input: Fluid.of('casting:molten_netherite') });
	e.remove({ input: Fluid.of('casting:molten_glowstone') });
	e.remove({ input: Fluid.of('casting:molten_glass') });
	e.remove({ input: Fluid.of('casting:molten_end_stone') });
	e.remove({ input: Fluid.of('casting:molten_ender') });

	e.remove({ id: 'casting:solidifier/iron/dust' });
	e.remove({ id: 'casting:solidifier/nickel/dust' });
	e.remove({ id: 'casting:solidifier/platinum/dust' });
	e.remove({ id: 'casting:solidifier/gold/dust' });
	e.remove({ id: 'casting:solidifier/silver/dust' });
	e.remove({ id: 'casting:solidifier/zinc/dust' });
	e.remove({ id: 'casting:solidifier/iridium/dust' });
	e.remove({ id: 'casting:solidifier/copper/dust' });
	e.remove({ id: 'casting:solidifier/tin/dust' });
	e.remove({ id: 'casting:solidifier/lead/dust' });
	e.remove({ id: 'casting:solidifier/osmium/dust' });
	
	e.remove({ output: 'casting:multiblock_controller' });
	e.remove({ output: 'casting:multiblock_coolant_tank' });
	e.remove({ output: 'casting:multiblock_solidifier' });
	e.remove({ output: 'casting:multiblock_valve' });
	e.remove({ output: 'casting:multiblock_mixer' });
	e.remove({ output: 'casting:mixer' });
	e.remove({ output: 'casting:multiblock_fuel_tank' });
	e.remove({ output: 'casting:equipment_modifier' });
	e.remove({ output: 'brickfurnace:brick_blast_furnace'});
	e.remove({ output: 'brickfurnace:brick_smoker' });
	e.remove({ output: 'minecraft:furnace' });

	e.remove({ id: 'casting:ingot_mold' });
	e.remove({ id: 'minecraft:iron_nugget_from_smelting' });
	e.remove({ id: 'minecraft:gold_nugget_from_smelting' });

	e.remove({ type: 'minecraft:blasting' });

	//timed remove
	e.remove({ input: Fluid.of('casting:molten_osmium') });
	e.remove({ input: Fluid.of('casting:molten_platinum') });
	e.remove({ input: Fluid.of('casting:molten_nickel') });
	e.remove({ input: Fluid.of('casting:molten_lead') });
	e.remove({ input: Fluid.of('casting:molten_zinc') });
	e.remove({ input: Fluid.of('casting:molten_iridium') });
	e.remove({ input: Fluid.of('casting:molten_silver') });
	e.remove({ input: Fluid.of('casting:molten_tin') });
	e.remove({ input: Fluid.of('casting:molten_experience') });
	
	e.remove({ output: Fluid.of('casting:molten_osmium') });
	e.remove({ output: Fluid.of('casting:molten_platinum') });
	e.remove({ output: Fluid.of('casting:molten_nickel') });
	e.remove({ output: Fluid.of('casting:molten_lead') });
	e.remove({ output: Fluid.of('casting:molten_zinc') });
	e.remove({ output: Fluid.of('casting:molten_iridium') });
	e.remove({ output: Fluid.of('casting:molten_silver') });
	e.remove({ output: Fluid.of('casting:molten_tin') });
	e.remove({ output: Fluid.of('casting:molten_experience') });
})
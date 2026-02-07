ServerEvents.recipes(e => {
	function meltingVanilla(ores, types) {
		for (let ore of ores) {
			for (let type of types) {
				let input;
				let output;
				let idSuffix;

				if (type === 'raw_material') {
					input = `minecraft:raw_${ore}`;
					output = `144x industrialupgrade:iufluid${ore}`;
					idSuffix = 'from_raw_material';
				} else if (type === 'raw_storage_block') {
					input = `minecraft:raw_${ore}_block`;
					output = `1296x industrialupgrade:iufluid${ore}`;
					idSuffix = 'from_raw_storage_block';
				} else if (type === 'storage_block') {
					input = `minecraft:${ore}_block`;
					output = `1296x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}_storage_block`;
				} else if (type === 'nugget') {
					if (ore === 'copper') {
						continue;
					} else {
						input = `minecraft:${ore}_${type}`;
						output = `16x industrialupgrade:iufluid${ore}`;
						idSuffix = `from_${type}`;
					};
				} else if (type === 'plate') {
					input = `industrialupgrade:itemplates/${ore}_${type}`;
					output = `144x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}`;
				} else {
					input = `minecraft:${ore}_${type}`;
					output = `144x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}`;
				}

				e.recipes.casting
				.melting(input, output, 1000)
				.id(`casting:melting/${ore}/${idSuffix}`);
			}
		}
	}

	const woods = [
		'oak',
		'spruce',
		'birch',
		'jungle',
		'acacia',
		'dark_oak',
		'mangrove',
		'cherry'
	];

	const vanillaOre = [
		'copper',
		'iron',
		'gold'
	];

	const types = [
		'raw_material',
		'raw_storage_block',
		'ingot',
		'ore',
		'storage_block',
		'nugget',
		'plate'
	];

	e.shapeless('4x kubejs:charcoal_sand_compound', [
		'3x minecraft:charcoal',
		'minecraft:sand']);
	
	e.shapeless('kubejs:primitive_detector_template', [
		'#minecraft:axes',
		'#c:stripped_logs']).damageIngredient('#minecraft:axes');
	
	woods.forEach(wood => {
		e.shapeless(`minecraft:stripped_${wood}_log`, [
			'#minecraft:axes',
			`minecraft:${wood}_log`
		]).damageIngredient('#minecraft:axes')});
	
	e.shapeless('minecraft:stripped_bamboo_block', [
		'#minecraft:axes',
		'minecraft:bamboo_block']).damageIngredient('#minecraft:axes');
	
	e.shapeless('minecraft:stripped_crimson_stem', [
		'#minecraft:axes',
		'minecraft:crimson_stem']).damageIngredient('#minecraft:axes');
	
	e.shapeless('minecraft:stripped_warped_stem', [
		'#minecraft:axes',
		'minecraft:warped_stem']).damageIngredient('#minecraft:axes');
	
	e.shaped('2x kubejs:cast_compound', [
		' AB',
		'CDD'], {
		A: 'minecraft:gravel',
		B: 'minecraft:sand',
		C: 'minecraft:flint',
		D: 'minecraft:clay_ball'
	});

	e.shaped('casting:controller', [
		'ABA',
		'ACA',
		'ABA'], {
		A: 'casting:black_brick',
		B: 'casting:black_bricks',
		C: 'minecraft:furnace'
	}).id('casting:controller');

	e.shaped('casting:solidifier', [
		'A A',
		'ABA',
		'A A'], {
		A: 'casting:black_brick',
		B: 'casting:black_bricks'
	}).id('casting:solidifier');

	e.shaped('casting:tank', [
		'AAA',
		'ABA',
		'AAA'], {
		A: 'casting:black_brick',
		B: 'casting:black_brick_glass'
	}).id('casting:tank');

	e.shaped('industrialupgrade:itemcell/itemcell', [
		' A ',
		'ABA',
		' A '], {
		A: 'minecraft:copper_ingot',
		B: 'casting:black_brick_glass'
	}).id('industrialupgrade:industrialupgrade_1667');
	
	e.smelting('casting:black_brick_glass', 'kubejs:charcoal_sand_compound').id('casting:black_brick_glass');
	e.smelting('casting:black_brick', 'kubejs:cast_compound').id('casting:smelting/black_brick');
	
	e.recipes.casting.solidifier('kubejs:primitive_detector_template', '360x casting:molten_iron', 'kubejs:primitive_detector_furnace');

	e.recipes.casting.melting('kubejs:cast_compound', '288x casting:molten_black_brick', 1000).id('casting:melting/black_brick/from_clay');
	e.recipes.casting.melting('casting:black_brick', '144x casting:molten_black_brick', 1000).id('casting:melting/black_brick/from_black_brick');
	e.recipes.casting.melting('casting:black_bricks', '576x casting:molten_black_brick', 1000).id('casting:melting/black_brick/from_black_bricks');

	e.recipes.casting.coolant('10x industrialupgrade:iufluidcoolant', 100)
	e.recipes.casting.coolant('10x industrialupgrade:iufluidhelium', 50)
	e.recipes.casting.coolant('10x industrialupgrade:iufluidcryogen', 10)

	e.recipes.casting.fuel('10x industrialupgrade:iufluidpahoehoe_lava', 1500, 150)

	meltingVanilla(vanillaOre, types);
});

ServerEvents.tags('block', e => {
	function RemoveAddToolTire(oldTool, newTool, block) {
		e.remove(`minecraft:needs_${oldTool}_tool`, block)
		e.add(`minecraft:needs_${newTool}_tool`, block)
	};

	const stoneToolBlocks = e.get('minecraft:needs_stone_tool').getObjectIds();

	stoneToolBlocks.forEach(ore => {
		if (
			Ingredient.of(/^industrialupgrade:baseore1\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:baseore2\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:blockpreciousore\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:apatite\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:classicore\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:thorium_ore\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:blockspace\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:blockspace2\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:blockspace3\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:blockspace4\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:basaltheavyore\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:basaltheavyore1\/.+$/).test(ore) ||
			Ingredient.of(/^industrialupgrade:blockradiationore\/.+$/).test(ore))
		{
			RemoveAddToolTire('stone', 'iron', ore);
		}
	});

	e.add('minecraft:needs_iron_tool', 'minecraft:coal_ore');
	e.add('minecraft:needs_iron_tool', 'minecraft:deepslate_coal_ore');
	e.add('minecraft:needs_iron_tool', 'minecraft:nether_gold_ore');
	e.add('minecraft:needs_iron_tool', 'minecraft:nether_quartz_ore');
	RemoveAddToolTire('stone', 'iron', 'minecraft:lapis_ore');
	RemoveAddToolTire('stone', 'iron', 'minecraft:deepslate_lapis_ore');
});
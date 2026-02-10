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
					idSuffix = `from_${type}`;
				} else if (type === 'ores') {
					input = `#c:${type}/${ore}`;
					output = `144x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type.substring(0, type.length - 1)}`;
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
				} else if (type === 'casing') {
					input = `industrialupgrade:casing/${ore}`;
					output = `72x industrialupgrade:iufluid${ore}`;
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

	function soldifierVanilla(ores, types) {
		for (let ore of ores) {
			for (let type of types) {
				let input_mold;
				let input_fluid;
				let output;

				if (type === 'ingot') {
					input_mold = `casting:${type}_mold`;
					input_fluid = `144x industrialupgrade:iufluid${ore}`;
					output = `minecraft:${ore}_ingot`;
				} else if (type === 'storage_block') {
					input_mold = `casting:block_mold`;
					input_fluid = `1296x industrialupgrade:iufluid${ore}`;
					output = `minecraft:${ore}_block`;
				} else if (type === 'nugget') {
					if (ore === 'copper') {
						continue;
					} else {
						input_mold = `casting:${type}_mold`;
						input_fluid = `16x industrialupgrade:iufluid${ore}`;
						output = `minecraft:${ore}_nugget`;
					};
				} else if (type === 'plate') {
					input_mold = `casting:${type}_mold`;
					input_fluid = `144x industrialupgrade:iufluid${ore}`;
					output = `industrialupgrade:itemplates/${ore}_${type}`;
				}

				e.recipes.casting
				.solidifier(input_mold, input_fluid, output)
				.id(`casting:solidifier/${ore}/${type}`);
			}
		}
	}

	function meltingIU(ores, types) {
		for (let ore of ores) {
			for (let type of types) {
				let input;
				let output;
				let idSuffix;

				if (type === 'raw_material') {
					input = `industrialupgrade:raw_metals/raw_${ore}`;
					output = `144x industrialupgrade:iufluid${ore}`;
					idSuffix = 'from_raw_material';
				} else if (type === 'raw_storage_block') {
					input = `industrialupgrade:raw_block/raw_${ore}`;
					output = `1296x industrialupgrade:iufluid${ore}`;
					idSuffix = 'from_raw_storage_block';
				} else if (type === 'storage_block') {
					input = `industrialupgrade:baseblockingot/${ore}`;
					output = `1296x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}`;
				} else if (type === 'ingot') {
					input = `industrialupgrade:itemingots/${ore}_${type}`;
					output = `144x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}`;
				} else if (type === 'ores') {
					input = `#c:${type}/${ore}`;
					output = `144x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type.substring(0, type.length - 1)}`;
				} else if (type === 'nugget') {
					if (ore === 'copper') {
						continue;
					} else {
						input = `industrialupgrade:${type}/${ore}`;
						output = `16x industrialupgrade:iufluid${ore}`;
						idSuffix = `from_${type}`;
					};
				} else if (type === 'plate') {
					input = `industrialupgrade:itemplates/${ore}_${type}`;
					output = `144x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}`;
				} else if (type === 'casing') {
					input = `industrialupgrade:casing/${ore}`;
					output = `72x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}`;
				} else if (type === 'stick') {
					input = `industrialupgrade:stick/${ore}`;
					output = `72x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}`;
				} else if (type === 'doubleplate') {
					input = `industrialupgrade:itemdoubleplates/${ore}_${type}`;
					output = `1296x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}`;
				} else if (type === 'gear') {
					input = `industrialupgrade:${type}/${ore}`;
					output = `576x industrialupgrade:iufluid${ore}`;
					idSuffix = `from_${type}`;
				}

				e.recipes.casting
				.melting(input, output, 1000)
				.id(`casting:melting/${ore}/${idSuffix}`);
			}
		}
	}

	function soldifierIU(ores, types) {
		for (let ore of ores) {
			for (let type of types) {
				let input_mold;
				let input_fluid;
				let output;

				if (type === 'ingot') {
					input_mold = `casting:${type}_mold`;
					input_fluid = `144x industrialupgrade:iufluid${ore}`;
					output = `industrialupgrade:itemingots/${ore}_${type}`;
				} else if (type === 'storage_block') {
					input_mold = `casting:block_mold`;
					input_fluid = `1296x industrialupgrade:iufluid${ore}`;
					output = `industrialupgrade:baseblockingot/${ore}`;
				} else if (type === 'nugget') {
					if (ore === 'copper') {
						continue;
					} else {
						input_mold = `casting:${type}_mold`;
						input_fluid = `16x industrialupgrade:iufluid${ore}`;
						output = `industrialupgrade:${type}/${ore}`;
					};
				} else if (type === 'plate') {
					input_mold = `casting:${type}_mold`;
					input_fluid = `144x industrialupgrade:iufluid${ore}`;
					output = `industrialupgrade:itemplates/${ore}_${type}`;
				} else if (type === 'casing') {
					input_mold = `kubejs:${type}_mold`;
					input_fluid = `72x industrialupgrade:iufluid${ore}`;
					output = `industrialupgrade:${type}/${ore}`;
				} else if (type === 'stick') {
					input_mold = `casting:rod_mold`;
					input_fluid = `72x industrialupgrade:iufluid${ore}`;
					output = `industrialupgrade:${type}/${ore}`;
				} else if (type === 'gear') {
					input_mold = `casting:${type}_mold`;
					input_fluid = `576x industrialupgrade:iufluid${ore}`;
					output = `industrialupgrade:${type}/${ore}`;
				}

				e.recipes.casting
				.solidifier(input_mold, input_fluid, output)
				.id(`casting:solidifier/${ore}/${type}`);
			}
		}
	}

	function brick_smelting(output, input, xp, cookingtime) {
		let ingredients

		if (input[0] === '#') {
			ingredients = { tag: input.substring(1) }
		} else {
			ingredients = { item: input } }

		e.custom({
			type: "brickfurnace:smelting",
			ingredient: ingredients,
			result: { id: output },
			experience: xp || 0.6,
			cookingtime: cookingtime || 200
		})
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

	const IUore = [
		'titanium'
	];

	const types = [
		'raw_material',
		'raw_storage_block',
		'ingot',
		'ores',
		'storage_block',
		'nugget',
		'plate',
		'casing'
	];

	const IUtypes = [
		'raw_material',
		'raw_storage_block',
		'ingot',
		'ores',
		'storage_block',
		'nugget',
		'plate',
		'casing',
		'stick',
		'doubleplate',
		'gear'
	];

	const OutputTypes = [
		'ingot',
		'storage_block',
		'nugget',
		'plate'
	];

	const IUoutputTypes = [
		'ingot',
		'storage_block',
		'nugget',
		'plate',
		'casing',
		'stick',
		'gear'
	];

	meltingVanilla(vanillaOre, types);
	soldifierVanilla(vanillaOre, OutputTypes);
	meltingIU(IUore, IUtypes);
	soldifierIU(IUore, IUoutputTypes);

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
		C: 'brickfurnace:brick_furnace'
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

	e.shaped('minecraft:blast_furnace', [
		'AAA',
		'ABA',
		'CCC'], {
		A: 'kubejs:raw_iron_ingot',
		B: 'kubejs:primitive_detector_furnace',
		C: 'minecraft:smooth_stone'
	}).id('minecraft:blast_furnace');

	e.shaped('industrialupgrade:block_anvil/block_anvil', [
		'AAA',
		' B ',
		'BCB'], {
		A: 'industrialupgrade:itemingots/titanium_ingot',
		B: 'minecraft:iron_ingot',
		C: 'minecraft:iron_block'
	}).id('industrialupgrade:industrialupgrade_1066');

	e.shaped('industrialupgrade:forge_hammer', [
		'AAA',
		'ABA',
		' B '], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:stick'
	}).id('industrialupgrade:industrialupgrade_1649');

	e.shaped('industrialupgrade:energy/iron_hammer', [
		'ABA'], {
		A: 'industrialupgrade:itemplates/iron_plate',
		B: 'industrialupgrade:forge_hammer'
	}).id('industrialupgrade:industrialupgrade_647');
	
	e.smelting('casting:black_brick_glass', 'kubejs:charcoal_sand_compound').id('casting:black_brick_glass');
	e.smelting('casting:black_brick', 'kubejs:cast_compound').id('casting:smelting/black_brick')

	e.blasting('minecraft:iron_ingot', 'kubejs:raw_iron_ingot');

	e.campfireCooking('minecraft:brick', 'minecraft:clay_ball', 0, 200);

	brick_smelting('casting:black_brick_glass', 'kubejs:charcoal_sand_compound');
	brick_smelting('casting:black_brick', 'kubejs:cast_compound');
	brick_smelting('minecraft:charcoal', '#minecraft:logs_that_burn');
	brick_smelting('minecraft:copper_ingot', 'minecraft:raw_copper');
	brick_smelting('minecraft:copper_ingot', '#c:ores/copper');
	
	e.recipes.casting.solidifier('kubejs:primitive_detector_template', '576x casting:molten_iron', 'kubejs:primitive_detector_furnace');
	e.recipes.casting.solidifier('casting:ingot_mold', '144x casting:molten_black_brick', 'casting:black_brick').id('casting:solidifier/black_brick/black_brick');
	e.recipes.casting.solidifier('casting:block_mold', '576x casting:molten_black_brick', 'casting:black_bricks').id('casting:solidifier/black_brick/block');
	e.recipes.casting.solidifier('minecraft:raw_iron', '144x industrialupgrade:iufluidiron', 'kubejs:raw_iron_ingot');
	e.recipes.casting.solidifier('minecraft:iron_ingot', '576x casting:molten_black_brick', 'casting:ingot_mold').id('casting:ingot_mold_bricks');
	e.recipes.casting.solidifier('minecraft:iron_block', '576x casting:molten_black_brick', 'casting:block_mold').id('casting:block_mold');
	e.recipes.casting.solidifier('minecraft:iron_nugget', '576x casting:molten_black_brick', 'casting:nugget_mold').id('casting:nugget_mold');
	e.recipes.casting.solidifier('industrialupgrade:itemplates/iron_plate', '576x casting:molten_black_brick', 'casting:plate_mold').id('casting:plate_mold');
	e.recipes.casting.solidifier('kubejs:stick_iron', '576x casting:molten_black_brick', 'casting:rod_mold').id('casting:rod_mold');
	e.recipes.casting.solidifier('industrialupgrade:gear/iron', '576x casting:molten_black_brick', 'casting:gear_mold').id('casting:gear_mold');
	e.recipes.casting.solidifier('industrialupgrade:casing/iron', '576x casting:molten_black_brick', 'kubejs:casing_mold').id('kubejs:casing_mold');

	e.recipes.casting.melting('kubejs:cast_compound', '288x casting:molten_black_brick', 1000).id('casting:melting/black_brick/from_clay');
	e.recipes.casting.melting('casting:black_brick', '144x casting:molten_black_brick', 1000).id('casting:melting/black_brick/from_black_brick');
	e.recipes.casting.melting('casting:black_bricks', '576x casting:molten_black_brick', 1000).id('casting:melting/black_brick/from_black_bricks');

	e.recipes.casting.coolant('10x industrialupgrade:iufluidcoolant', 100)
	e.recipes.casting.coolant('10x industrialupgrade:iufluidhelium', 50)
	e.recipes.casting.coolant('10x industrialupgrade:iufluidcryogen', 10)

	e.recipes.casting.fuel('10x industrialupgrade:iufluidpahoehoe_lava', 1500, 150)
});
ServerEvents.recipes(e => {
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
		B: 'ae2:quartz_glass'
	}).id('casting:tank');
	
	e.smelting('ae2:quartz_glass', 'kubejs:charcoal_sand_compound').id('ae2:decorative/quartz_glass');
	e.smelting('casting:black_brick', 'kubejs:cast_compound').id('casting:smelting/black_brick');
	
	e.recipes.casting.solidifier('kubejs:primitive_detector_template', '360x casting:molten_iron', 'kubejs:primitive_detector_furnace');
});
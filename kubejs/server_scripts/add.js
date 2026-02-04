ServerEvents.recipes(e => {
	e.shapeless( '4x kubejs:charcoal_sand_compound', [
		'3x minecraft:charcoal',
		'minecraft:sand'])
	
	e.shaped( '2x kubejs:cast_compound', [
		' AB',
		'CDD'], {
		A: 'minecraft:gravel',
		B: 'minecraft:sand',
		C: 'minecraft:flint',
		D: 'minecraft:clay_ball'
	})

	e.shaped( '2x kubejs:cast_compound', [
		'ABA',
		'ACA',
		'ABA'], {
		A: 'casting:black_brick',
		B: 'casting:black_bricks',
		C: 'minecraft:flint'
	})
	
	e.smelting('ae2:quartz_glass', 'kubejs:charcoal_sand_compound').id('ae2:decorative/quartz_glass')
	e.smelting('casting:black_brick', 'kubejs:cast_compound').id('casting:smelting/black_brick')
})
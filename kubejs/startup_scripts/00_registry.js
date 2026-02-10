StartupEvents.registry('item', e => {
	e.create('charcoal_sand_compound').displayName('Charcoal Sand Compound');
	e.create('cast_compound').displayName('Cast Compound');
	e.create('primitive_detector_template').displayName('Primitive Detector Template');
	e.create('primitive_detector_furnace').displayName('Primitive Detector: Furnace');
	e.create('raw_iron_ingot').displayName('Messy Iron Ingot');
	e.create('casing_mold').displayName('Casing Mold').tag('casting:molds').tag('c:molds/casing');
	e.create('stick_iron').displayName('Iron Stick').tag('c:rods').tag('c:rods/iron');
})

Platform.mods.kubejs.name = 'Industrial Casualic';
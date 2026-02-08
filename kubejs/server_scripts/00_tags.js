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
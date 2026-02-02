ServerEvents.recipes(e => {
	e.remove({ mod: 'ultimine_addition' })
})

RecipeViewerEvents.removeEntries('item', e => {
	e.remove('@ultimine_addition')
})
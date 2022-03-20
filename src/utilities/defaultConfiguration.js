const defaultConfiguration = {
  generationMethod: 'csv',
	oracle: 'PruneAtDepthOracle',
  numberOfCountries: 5,
  searchDepth: 20,
	configFileName: null,

	discountGamma: .999,
	discountOffset: 10,
	probabilityPenalty: -50,

  //resource config
  electronicsRange: [0, 10],
	electronicsWasteRange: [0, 10],
	housingRange: [0, 5],
	housingWasteRange: [0, 10],
	metallicAlloysRange: [0, 10],
	metallicAlloysWasteRange: [0, 10],
	metallicElementsRange: [0, 100],
	populationRange: [5, 10],
	timberRange: [0, 100]
}

export default defaultConfiguration;

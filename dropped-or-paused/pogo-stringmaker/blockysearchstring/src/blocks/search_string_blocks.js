import * as Blockly from "blockly";

const searchStringBlocks = {
	search_string: {
		init: function () {
			this.appendValueInput("CRITERIA")
				.setCheck("String")
				.appendField("Search for:");
			this.setOutput(true, "String");
			this.setColour(160);
			this.setTooltip("Builds a search string for Pokemon GO.");
			this.setHelpUrl("https://example.com/search-string-help");
		},
	},
};

Blockly.Blocks["search_string"] = {
	init: function () {
		this.jsonInit(searchStringBlocks["search_string"]);
	},
};

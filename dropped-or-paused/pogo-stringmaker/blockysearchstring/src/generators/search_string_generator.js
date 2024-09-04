import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
	{
		type: "search_string",
		message0: "Search for: %1",
		args0: [
			{
				type: "input_value",
				name: "CRITERIA",
				check: "String",
			},
		],
		output: "String",
		colour: 160,
		tooltip: "Builds a search string for Pokemon GO.",
		helpUrl: "https://example.com/search-string-help",
	},
]);

Blockly.JavaScript["search_string"] = function (block) {
	const criteria =
		Blockly.JavaScript.valueToCode(
			block,
			"CRITERIA",
			Blockly.JavaScript.ORDER_NONE
		) || "''";
	const code = `'${criteria}'`;
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

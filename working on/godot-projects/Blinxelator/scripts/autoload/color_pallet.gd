extends Node

const COLOR_PALLET = [
	Color("#EAEEF3"), #	White
	Color("#D4D8D3"), #	Ghost While
	Color("#C2C4C2"), #	Ash Grey
	Color("#A7ACAD"), #	Light Gray
	Color("#959698"), #	Gray
	Color("#82878B"), #	Oslo Gray
	Color("#70757B"), #	Dark Gray
	Color("#5A5F65"), #	Steel Grey
	Color("#565A5E"), #	Charcoal Gray
	Color("#4C5156"), #	Iron Grey
	Color("#3B3E44"), #	Mine Shaft
	Color("#3A3E42"), #	Pepper
	Color("#292A2B"), #	Black
	Color("#D38ED4"), #	Light Grape
	Color("#BC3CA6"), #	Pink Plum
	Color("#C0B7D7"), #	Maverick
	Color("#BCC3E1"), #	Pale Lilac
	Color("#AEADDC"), #	Lilac
	Color("#B8AAD9"), #	Candy Violet
	Color("#8884D0"), #	Iris Violet
	Color("#8A7EC2"), #	Lavender
	Color("#9165B2"), #	Pastel Lavender
	Color("#803897"), #	Amethyst
	Color("#644FA4"), #	Royal Purple
	Color("#4F3989"), #	Butterfly Bush
	Color("#48337E"), #	Purple
	Color("#36384D"), #	Black Rock
	Color("#AFB8DF"), #	Summer Rain
	Color("#A7BAE1"), #	Moonlight Blue
	Color("#6B9AD4"), #	Azur Blue
	Color("#5A89CE"), #	Cornflower Blue
	Color("#658AD0"), #	Forget Me Not
	Color("#4D74C6"), #	Horizon Blue
	Color("#566CBD"), #	Indigo
	Color("#416DBE"), #	Cobolt
	Color("#0078BF"), #	True Blue
	Color("#0077CA"), #	Pool Blue
	Color("#005AA9"), #	Caribbian Blue
	Color("#004FA4"), #	Dark Blue
	Color("#024288"), #	Marine
	Color("#30429E"), #	Royal Blue
	Color("#A7CDDE"), #	Sky Blue
	Color("#61BBD3"), #	Waterfall
	Color("#6AAEDB"), #	Himalaya Blue
	Color("#55A4D9"), #	Turquoise
	Color("#00A7E3"), #	Electric Blue
	Color("#2EABD8"), #	Baby Blue
	Color("#009EC2"), #	Azure
	Color("#279BBE"), #	Lagoon
	Color("#0084B2"), #	Dark Steel Blue
	Color("#0084CE"), #	Light Blue
	Color("#006C9F"), #	Pond Blue
	Color("#00649A"), #	Wegdewood Blue
	Color("#9EC9CD"), #	Shadow Green
	Color("#68C4D2"), #	Light Sea Blue
	Color("#5AB0BF"), #	Steel Blue
	Color("#60BFCB"), #	Blue-Green
	Color("#00A5A1"), #	Medium Turquoise
	Color("#0093A9"), #	Sea Blue
	Color("#007F9E"), #	Deep Water
	Color("#007D91"), #	Petrol Blue
	Color("#B2D7CE"), #	Sea Mist
	Color("#8AD5C9"), #	Frosty Blue
	Color("#7CD2A5"), #	Polar Mint
	Color("#80B7A1"), #	Spearmint
	Color("#72AC9A"), #	Celadon Green
	Color("#97CF87"), #	Pistachio
	Color("#3EB724"), #	Clover Field
	Color("#1FC467"), #	Emerald
	Color("#00B26F"), #	Eucalyptus
	Color("#009053"), #	Green
	Color("#007D2B"), #	Jade Green
	Color("#0D7535"), #	Pooltable Felt
	Color("#007D6E"), #	Snake Green
	Color("#00765F"), #	Green Tea
	Color("#006E69"), #	Dark Eucalyptus
	Color("#00685E"), #	Dark Green
	Color("#153838"), #	Brunswick Green
	Color("#E2E65D"), #	Canary
	Color("#8EC324"), #	Bright Green
	Color("#CDC03F"), #	Key Lomen Pie
	Color("#ADAD29"), #	Drark Algae
	Color("#8BB23A"), #	Pastel Green
	Color("#D6CA6A"), #	Pale Yellow Moss
	Color("#CFC179"), #	Seashell Beige
	Color("#C4AE64"), #	Beige
	Color("#B6AE84"), #	Khaki
	Color("#A59F65"), #	Light Greengray
	Color("#938D54"), #	Mossy Green
	Color("#8F8E3C"), #	Dark Olive
	Color("#AB9745"), #	Beach Beige
	Color("#8D8B51"), #	Earth Green
	Color("#7F7E49"), #	Sage Green
	Color("#978138"), #	Caffe Latté
	Color("#907C41"), #	Oaktree Brown
	Color("#5B6E35"), #	Pinetree Green
	Color("#345621"), #	Forrest Green
	Color("#DCB794"), #	Pale Skin
	Color("#E3C09A"), #	Sahara Sand
	Color("#E9C1A6"), #	Vanilla
	Color("#DCA384"), #	Sand
	Color("#C58B60"), #	Sunkissed Teint
	Color("#BB6833"), #	Sienna
	Color("#B35540"), #	Buccaneer
	Color("#9A4541"), #	Redwood
	Color("#99323A"), #	Red Wine
	Color("#DFDABD"), #	Spring Sun
	Color("#EFDBA1"), #	Creme
	Color("#EED39E"), #	Beeswax
	Color("#D9B35E"), #	Pastel Orange
	Color("#CC9B74"), #	Tan
	Color("#BF9168"), #	Deer
	Color("#AA744E"), #	Clay
	Color("#B27938"), #	Marigold
	Color("#895D49"), #	Light Brown
	Color("#7A594F"), #	Mocha
	Color("#65463D"), #	Brown
	Color("#EADE7F"), #	Picasso
	Color("#E1D367"), #	Pastel Yellow
	Color("#E1C835"), #	Sandstorm
	Color("#EAC125"), #	Yellow
	Color("#ECC03D"), #	Corn
	Color("#FFA630"), #	Tangerine
	Color("#E8AE00"), #	Goldenrod
	Color("#CEA433"), #	Dandelion
	Color("#E68739"), #	Yellow Orange
	Color("#DC772B"), #	Papaya
	Color("#F96F40"), #	Bright Carrot
	Color("#EB6027"), #	Orange
	Color("#E5533C"), #	Blaze Orange
	Color("#E2A488"), #	Mandys Pink
	Color("#DD9285"), #	Warm Blush
	Color("#EE927C"), #	Burning Sand
	Color("#E07B69"), #	Salmon
	Color("#EF7F61"), #	Apricot
	Color("#BE5D65"), #	Deep Chestnut
	Color("#D6668E"), #	Fuschia
	Color("#CE6D83"), #	Old Pink
	Color("#EC625E"), #	Coral Red
	Color("#CB3531"), #	Tall Poppy
	Color("#F2BFB8"), #	Bubble Gun
	Color("#E1CCD2"), #	Mona Lisa
	Color("#DFC3E1"), #	Marsmallow Rose
	Color("#D5A6BA"), #	Rosebud Pink
	Color("#DDA1CC"), #	Lily Pink
	Color("#E182B0"), #	Carnation Pink
	Color("#EF67B2"), #	Raspberry Pink
	Color("#DC519A"), #	Hot Pink
	Color("#DF486D"), #	Flamingo
	Color("#DA4383"), #	Magenta
	Color("#D62779"), #	Dark Pink
	Color("#B61927"), #	Red
	Color("#B11836"), #	Paprika
	Color("#9D1A38"), #	Bloodrose Red
	Color("#A3134A"), #	Burgundy
	Color("#921E5D"), #	Mulberry Wood
]

func get_palette() -> Array:
	return COLOR_PALLET

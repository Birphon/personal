extends Node

var CharacterName = ""
var CharacterExperience = 0
var CharacterMomentum = 0
var CharacterEdge = 0
var CharacterHeart = 0
var CharacterIron = 0
var CharacterShadow = 0
var CharacterWits = 0
var CharacterHealth = 0
var CharacterSpirit = 0
var CharacterSupply = 0
var CharacterBonds = {}
var CharacterVows = {}
var CharacterDebilities = CharacterConditions + " " + CharacterBanes + " " + CharacterBurdens
var CharacterConditions = {"Wounded": false, "Shaken": false, "Unprepared": false, "Encumbered": false}
var CharacterBanes = {"Maimed": false, "Corrupted": false}
var CharacterBurdens = {"Cursed": false, "Tormented": false}

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

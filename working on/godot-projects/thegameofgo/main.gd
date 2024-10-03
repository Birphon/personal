extends Node2D


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	var tile = MeshInstance2D.new()
	tile.modulate = Color(1, 0.894118, 0.768627, 1)
	tile.position.x = 200
	tile.position.y = 200
	tile.visible = true
	add_child(tile)
	print(tile)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass

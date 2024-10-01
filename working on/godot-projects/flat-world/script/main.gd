extends Node3D

@onready var valChange : LineEdit = $valChange
@onready var floor : MeshInstance3D = $Floor

var val = 800

func _ready():
	# Set the initial size of the floor
	update_floor_size()


func _input(event):
	if event.is_action_pressed("ui_accept"):
		# Handle Enter key when LineEdit is focused
		if valChange.has_focus():
			var text = valChange.text
			_on_val_change_text_submitted(text)

func update_floor_size():
	$textbox.text = str(val)
	if floor:
		# Update the scale of the Floor based on the new value
		floor.scale = Vector3(val / floor.mesh.get_aabb().size.x, 1, val / floor.mesh.get_aabb().size.z)
		# If you have a shape associated with FloorC, update its size too
		var floor_c = $Floor/FloorC
		if floor_c and floor_c.shape:
			floor_c.shape.extents = Vector3(val / 2, 1 / 2, val / 2)

func _on_val_change_text_submitted(new_text):
	# Parse the new text to float
	var new_value = float(new_text)
	if new_value > 0:  # Check to ensure the value is valid
		val = new_value
		update_floor_size()
	# Clear the LineEdit text after submitting
	valChange.clear()

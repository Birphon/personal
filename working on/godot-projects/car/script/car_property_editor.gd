extends Control

var engine_force: float
var brake_force: float
var steering: float
var roll_influence: float
var radius: float
var rest_length: float
var friction_slip: float
var suspension_travel: float
var suspension_stiffness: float
var suspension_max_force: float
var damping_compression: float
var damping_relaxation: float
var use_as_traction: bool
var use_as_steering: bool

@onready var PerWheelMotion = $OptionButton/VBoxContainer/PerWheelMotion
@onready var VBody3D = $OptionButton/VBoxContainer/VehicleBody3D
@onready var Wheel = $OptionButton/VBoxContainer/Wheel
@onready var Suspension = $OptionButton/VBoxContainer/Suspension
@onready var Damping = $OptionButton/VBoxContainer/Damping
@onready var option_menu = $OptionButton.get_popup()

func _ready():
	LabelMaker(self)
	menu_button()
	hider()

func hider():
	PerWheelMotion.hide()
	VBody3D.hide()
	Wheel.hide()
	Suspension.hide()
	Damping.hide()
	
func menu_button():
	option_menu.add_item("PerWheelMotion")
	option_menu.add_item("Vehicle3DBody")
	option_menu.add_item("Wheel")
	option_menu.add_item("Suspension")
	option_menu.add_item("Damping")
	
func LabelMaker(node: Node):
	if node.get_parent() != null:
		var parent = node.get_parent()
		var parent_name = parent.name
		
		# Only proceed if the parent is not of type Control
		if not (parent is Control):
			# Check if the node is a Label (regular)
			if node is Label:
				node.text = parent_name
			
			# Check if the node is a RichTextLabel
			elif node is RichTextLabel:
				node.bbcode_enabled = true
				node.text = "[b]" + parent_name + "[/b]"
		
		# Check if the parent is a VBoxContainer and apply theme override
		if parent is VBoxContainer:
			parent.add_theme_constant_override("outline_size", 10)
	
	# Iterate through all the children of the current node
	for child in node.get_children():
		LabelMaker(child)

func on_item_selected(id):
	print(str(option_menu.get_item_id(id)))
	if option_menu.get_item_id(id) == 1:
		print("attempting to show...")
		PerWheelMotion.show()

func _on_engine_force_changed(value: float):
	engine_force = value
func _on_break_value_changed(value: float):
	brake_force = value
func _on_steering_value_changed(value: float):
	steering = value
func _on_is_traction_toggled(value: bool):
	use_as_traction = value
func _on_is_steering_toggled(value: bool):
	use_as_steering = value
func _on_roll_influence_value_changed(value: float):
	roll_influence = value
func _on_radius_value_changed(value: float):
	radius = value
func _on_rest_length_value_changed(value: float):
	rest_length = value
func _on_friction_slip_value_changed(value: float):
	friction_slip = value
func _on_travel_value_changed(value: float):
	suspension_travel = value
func _on_stiffness_value_changed(value: float):
	suspension_stiffness = value
func _on_max_force_value_changed(value: float):
	suspension_max_force = value
func _on_compression_value_changed(value: float):
	damping_compression = value
func _on_relaxation_value_changed(value: float):
	damping_relaxation = value



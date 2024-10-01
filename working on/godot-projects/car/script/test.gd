extends Control

@onready var menu_button = $MenuButton/MenuController
@onready var perwheel = $MenuButton/MenuController/PerWheelMotion/PerWheelMotion

@onready var perwheel_button = $MenuButton/MenuController/PerWheelMotion
@onready var vehiclebody_button = $MenuButton/MenuController/VehicleBody3D

var button_distance := 0
var vbody_init_pos := 0

# Called when the node enters the scene tree for the first time.
func _ready():
	menu_button.visible = !menu_button.visible


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass


func _on_menu_button_pressed():
	menu_button.visible = !menu_button.visible


func _on_per_wheel_motion_pressed():
	perwheel.visible = !perwheel.visible

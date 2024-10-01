# Vehicle.gd
extends Node3D

@export var body_size: Vector3 = Vector3(1, 0.5, 2) # Default size for the body
@export var wheel_top_radius: float = 0.5 # Default wheel top radius
@export var wheel_bottom_radius: float = 0.5 # Default wheel bottom radius

var body: MeshInstance3D
var wheels: Array
var collision_shape: CollisionShape3D

func _ready():
	# Find the body and configure it
	body = $Body
	var cube_mesh = body.mesh as BoxMesh
	cube_mesh.size = body_size
	body.mesh = cube_mesh
	
	# Find and configure the wheels
	wheels = []
	for i in range(4):
		var wheel = get_node("Wheel" + str(i + 1)) as MeshInstance3D
		var cylinder_mesh = wheel.mesh as CylinderMesh
		cylinder_mesh.top_radius = wheel_top_radius
		cylinder_mesh.bottom_radius = wheel_bottom_radius
		cylinder_mesh.height = 0.3
		wheel.mesh = cylinder_mesh
		wheels.append(wheel)
	
	# Initialize collision shape
	collision_shape = $CollisionShape3D
	update_collision_shape()

func _position_wheels():
	# Set positions of the wheels based on the body size
	wheels[0].transform.origin = Vector3(body_size.x / 2, -body_size.y / 2, body_size.z / 2)
	wheels[1].transform.origin = Vector3(-body_size.x / 2, -body_size.y / 2, body_size.z / 2)
	wheels[2].transform.origin = Vector3(body_size.x / 2, -body_size.y / 2, -body_size.z / 2)
	wheels[3].transform.origin = Vector3(-body_size.x / 2, -body_size.y / 2, -body_size.z / 2)
	
	# Update collision shape to include wheel locations
	update_collision_shape()

func update_collision_shape():
	if not collision_shape:
		return
	
	# Get wheel positions
	var min_x = body_size.x / 2
	var max_x = -body_size.x / 2
	var min_z = body_size.z / 2
	var max_z = -body_size.z / 2
	
	for wheel in wheels:
		var wheel_pos = wheel.transform.origin
		min_x = min(min_x, wheel_pos.x)
		max_x = max(max_x, wheel_pos.x)
		min_z = min(min_z, wheel_pos.z)
		max_z = max(max_z, wheel_pos.z)
	
	# Update the collision shape to cover the body and wheels
	var box_shape = collision_shape.shape as BoxShape3D
	box_shape.extents = Vector3(
		max_x - min_x + body_size.x / 2,
		body_size.y / 2,
		max_z - min_z + body_size.z / 2
	)
	collision_shape.shape = box_shape

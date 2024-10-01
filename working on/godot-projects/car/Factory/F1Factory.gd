# F1Factory.gd
extends VehicleFactory

func create_vehicle() -> Node3D:
	var vehicle_scene = load("res://Vehicle.tscn") # Load the scene file
	var vehicle = vehicle_scene.instantiate() as Vehicle # Instantiate the scene
	if vehicle:
		vehicle.body_size = Vector3(1, 0.3, 3)
		vehicle.wheel_top_radius = 0.4
		vehicle.wheel_bottom_radius = 0.4
	return vehicle

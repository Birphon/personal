# SUVFactory.gd
extends VehicleFactory

func create_vehicle() -> Node3D:
	var vehicle = load("res://Vehicle.tscn").instantiate() as Vehicle
	vehicle.body_size = Vector3(1.5, 0.6, 2.5)
	vehicle.wheel_top_radius = 0.6
	vehicle.wheel_bottom_radius = 0.6
	return vehicle

# VehicleFactory.gd
extends Node3D
	# Abstract method to create vehicles
func create_vehicle():
	push_error("This method must be implemented by a subclass.")
	return null

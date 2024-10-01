# main.gd
extends Node3D

var f1_factory: Vehicle
var suv_factory: Vehicle

func _ready():
	# Load the factories
	
	f1_factory = load("res://Factory/F1Factory.gd").new()
	suv_factory = load("res://Factory/SUVFactory.gd").new()

	# Create vehicles
	var f1_car = f1_factory.create_vehicle()
	var suv_car = suv_factory.create_vehicle()

	# Position the vehicles in the world
	f1_car.transform.origin = Vector3(0, 0, 0)
	suv_car.transform.origin = Vector3(5, 0, 0)

	# Add vehicles to the scene
	add_child(f1_car)
	add_child(suv_car)

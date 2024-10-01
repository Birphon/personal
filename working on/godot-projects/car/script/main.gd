extends Node3D

@onready var flwheel = $TestCar/FLWheel
@onready var frwheel = $TestCar/FRWheel
@onready var blwheel = $TestCar/BLWheel
@onready var brwheel = $TestCar/BRWheel
@onready var car = $TestCar

func _ready():
	print("Engine Force = ", flwheel.engine_force)
	print("")
	print($"hbox/Vehicle Engine Force/TextEdit".text)
	

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	var flwheel_vals = [
		"FRONT LEFT WHEEL", "\n",
		"Engine Force = ", str(flwheel.engine_force), "\n",
		"Break = ", str(flwheel.brake), "\n",
		"Steering = ", str(flwheel.steering), "\n",
		"Use As  Traction = ", str(flwheel.use_as_traction), "\n",
		"Use As Steering = ", str(flwheel.use_as_steering), "\n",
		"Wheel Roll Inlfuence = ", str(flwheel.wheel_roll_influence), "\n",
		"Wheel Radius = ", str(flwheel.wheel_radius), "\n",
		"Wheel Rest Length = ", str(flwheel.wheel_rest_length), "\n",
		"Wheel Friction Slip = ", str(flwheel.wheel_friction_slip), "\n",
		"Suspension Travel = ", str(flwheel.suspension_travel), "\n",
		"Suspension Stiffness = ", str(flwheel.suspension_stiffness), "\n",
		"Suspension Max Force = ", str(flwheel.suspension_max_force), "\n",
		"Damping Compression = ", str(flwheel.damping_compression), "\n",
		"Damping Relaxation = ", str(flwheel.damping_relaxation)
	]
	var frwheel_vals = [
		"FRONT RIGHT WHEEL", "\n",
		"Engine Force = ", str(frwheel.engine_force), "\n",
		"Break = ", str(frwheel.brake), "\n",
		"Steering = ", str(frwheel.steering), "\n",
		"Use As  Traction = ", str(frwheel.use_as_traction), "\n",
		"Use As Steering = ", str(frwheel.use_as_steering), "\n",
		"Wheel Roll Inlfuence = ", str(frwheel.wheel_roll_influence), "\n",
		"Wheel Radius = ", str(frwheel.wheel_radius), "\n",
		"Wheel Rest Length = ", str(frwheel.wheel_rest_length), "\n",
		"Wheel Friction Slip = ", str(frwheel.wheel_friction_slip), "\n",
		"Suspension Travel = ", str(frwheel.suspension_travel), "\n",
		"Suspension Stiffness = ", str(frwheel.suspension_stiffness), "\n",
		"Suspension Max Force = ", str(frwheel.suspension_max_force), "\n",
		"Damping Compression = ", str(frwheel.damping_compression), "\n",
		"Damping Relaxation = ", str(frwheel.damping_relaxation)
	]
	var blwheel_vals = [
		"BACK LEFT WHEEL", "\n",
		"Engine Force = ", str(blwheel.engine_force), "\n",
		"Break = ", str(blwheel.brake), "\n",
		"Steering = ", str(blwheel.steering), "\n",
		"Use As  Traction = ", str(blwheel.use_as_traction), "\n",
		"Use As Steering = ", str(blwheel.use_as_steering), "\n",
		"Wheel Roll Inlfuence = ", str(blwheel.wheel_roll_influence), "\n",
		"Wheel Radius = ", str(blwheel.wheel_radius), "\n",
		"Wheel Rest Length = ", str(blwheel.wheel_rest_length), "\n",
		"Wheel Friction Slip = ", str(blwheel.wheel_friction_slip), "\n",
		"Suspension Travel = ", str(blwheel.suspension_travel), "\n",
		"Suspension Stiffness = ", str(blwheel.suspension_stiffness), "\n",
		"Suspension Max Force = ", str(blwheel.suspension_max_force), "\n",
		"Damping Compression = ", str(blwheel.damping_compression), "\n",
		"Damping Relaxation = ", str(blwheel.damping_relaxation)
	]
	var brwheel_vals = [
		"BACK RIGHT WHEEL", "\n",
		"Engine Force = ", str(brwheel.engine_force), "\n",
		"Break = ", str(brwheel.brake), "\n",
		"Steering = ", str(brwheel.steering), "\n",
		"Use As  Traction = ", str(brwheel.use_as_traction), "\n",
		"Use As Steering = ", str(brwheel.use_as_steering), "\n",
		"Wheel Roll Inlfuence = ", str(brwheel.wheel_roll_influence), "\n",
		"Wheel Radius = ", str(brwheel.wheel_radius), "\n",
		"Wheel Rest Length = ", str(brwheel.wheel_rest_length), "\n",
		"Wheel Friction Slip = ", str(brwheel.wheel_friction_slip), "\n",
		"Suspension Travel = ", str(brwheel.suspension_travel), "\n",
		"Suspension Stiffness = ", str(brwheel.suspension_stiffness), "\n",
		"Suspension Max Force = ", str(brwheel.suspension_max_force), "\n",
		"Damping Compression = ", str(brwheel.damping_compression), "\n",
		"Damping Relaxation = ", str(brwheel.damping_relaxation)
	]
	var car_vals = [
		"VEHICLE", "\n",
		"Vehicle Engine Force = ", str(car.engine_force), "\n",
		"Vehicle Brake = ", str(car.brake), "\n",
		"Vehicle Steering = ", str(car.steering), "\n",
		"Vehicle Mass = ", str(car.mass), "\n",
		"Vehicle Gravity Scale = ", str(car.gravity_scale)
	]
	$Cont/FrontLeftWheel.text = "".join(flwheel_vals)
	$Cont/FrontRightWheel.text = "".join(frwheel_vals)
	$Cont/BackLeftWheel.text = "".join(blwheel_vals)
	$Cont/BackRightWheel.text = "".join(brwheel_vals)
	$Cont/Vehicle.text = "".join(car_vals)

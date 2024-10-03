extends Node2D

# Constants
var start_month = 10  # October
var start_day = 1
var end_month = 12    # December
var end_day = 25
var daily_shrink_rate = 1.18 / 100.0  # Shrinks by 1.18% per day

# Initial scale of the MeshInstance2D
var initial_scale = Vector2(450, 840)

@onready var ice_block_mesh = $IceBlock

func _ready():
	# Setting Mesh Color
	print(ice_block_mesh.mesh.material.albedo_color) # This does print (0.2471, 0.8157, 0.8314, 0.6157)
	ice_block_mesh.mesh.material.albedo_color = Color(0.2471, 0.8157, 0.8314, 0.6157)
	
	# Get current date from system
	var current_date = Time.get_datetime_dict_from_system()

	# Calculate the number of days passed since October 1
	var days_passed = calculate_days_passed(
		current_date["month"], current_date["day"]
	)

	# Calculate ice block size reduction
	var reduction = days_passed * daily_shrink_rate
	var new_x_scale = initial_scale.x * (1.0 - reduction)
	var new_y_scale = initial_scale.y * (1.0 - reduction)

	# Apply scaling to the MeshInstance2D (ice block)
	ice_block_mesh.scale = Vector2(new_x_scale, new_y_scale)
	
	# Setting Label
	var str_date = "Date (DD/MM/YYYY): %s/%s/%s"
	var print_str = str_date % [current_date.day, current_date.month, current_date.year]
	$Date.text = print_str
	
	
	# Testing
	print("Current Date: ", current_date)
	print("Days Passed: ", days_passed )
	print("Reduction: ", reduction    , " and New Size: X",new_x_scale," Y",new_y_scale)

# Function to calculate days passed between October 1 and current date
func calculate_days_passed(current_month: int, current_day: int) -> int:
	if current_month == 10:
		return current_day - start_day
	elif current_month == 11:
		return 31 + current_day  # 31 days in October
	elif current_month == 12 and current_day <= 25:
		return 61 + current_day  # 31 days in October + 30 days in November
	return 0  # Return 0 if the date is out of bounds

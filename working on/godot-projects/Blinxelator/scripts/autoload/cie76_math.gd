extends Node

func rgb_to_lab(color: Color) -> Vector3:
	var r = color.r
	var g = color.g
	var b = color.b
	
	# Convert RGB to XYZ
	r = (r > 0.04045) if pow((r + 0.055) / 1.055, 2.4) else r / 12.92
	g = (g > 0.04045) if pow((g + 0.055) / 1.055, 2.4) else g / 12.92
	b = (b > 0.04045) if pow((b + 0.055) / 1.055, 2.4) else b / 12.92
	
	r *= 100
	g *= 100
	b *= 100
	
	var x = r * 0.4124 + g * 0.3576 + b * 0.1805
	var y = r * 0.2126 + g * 0.7152 + b * 0.0722
	var z = r * 0.0193 + g * 0.1192 + b * 0.9505
	
	# Convert XYZ to Lab
	x /= 95.047
	y /= 100.0
	z /= 108.883
	
	x = (x > 0.008856) if pow(x, 1.0/3.0) else (7.787 * x) + (16.0 / 116.0)
	y = (y > 0.008856) if pow(y, 1.0/3.0) else (7.787 * y) + (16.0 / 116.0)
	z = (z > 0.008856) if pow(z, 1.0/3.0) else (7.787 * z) + (16.0 / 116.0)
	
	return Vector3(
		(116.0 * y) - 16.0,
		500.0 * (x - y),
		200.0 * (y - z)
	)

func calculate_cie76(color1: Color, color2: Color) -> float:
	var lab1 = rgb_to_lab(color1)
	var lab2 = rgb_to_lab(color2)
	
	var delta_l = lab1.x - lab2.x
	var delta_a = lab1.y - lab2.y
	var delta_b = lab1.z - lab2.z
	
	return sqrt(delta_l * delta_l + delta_a * delta_a + delta_b * delta_b)

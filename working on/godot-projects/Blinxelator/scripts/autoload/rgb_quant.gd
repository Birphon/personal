extends Node

var colors_node: Node

func _ready():
	colors_node = get_node("/root/Colors")

func find_closest_color(target_color: Color) -> Color:
	var palette = colors_node.get_palette()
	var closest_color = palette[0]
	var min_distance = INF
	
	for color in palette:
		var distance = calculate_color_distance(target_color, color)
		if distance < min_distance:
			min_distance = distance
			closest_color = color
	
	return closest_color

func calculate_color_distance(color1: Color, color2: Color) -> float:
	var r_diff = color1.r - color2.r
	var g_diff = color1.g - color2.g
	var b_diff = color1.b - color2.b
	return sqrt(r_diff * r_diff + g_diff * g_diff + b_diff * b_diff)

func quantize_image(image: Image) -> Image:
	var width = image.get_width()
	var height = image.get_height()
	var quantized_image = Image.new()
	quantized_image.copy_from(image)
	quantized_image.lock()
	
	for y in range(height):
		for x in range(width):
			var pixel_color = image.get_pixel(x, y)
			var quantized_color = find_closest_color(pixel_color)
			quantized_image.set_pixel(x, y, quantized_color)
	
	quantized_image.unlock()
	return quantized_image

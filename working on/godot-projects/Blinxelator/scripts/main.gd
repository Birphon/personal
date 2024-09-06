extends Node2D

const MAX_WIDTH = 54
const MAX_COLORS = 60

var original_image: Image
var pixelated_image: Image
var max_height: int

@onready var file_name_label = $container/inputContainer/fileName
@onready var image_display = $container/inputContainer/imageDisplay
@onready var output_image = $container/outputContainer/outputImage
@onready var open_file_dialog = $OpenFileDialog
@onready var save_file_dialog = $SaveFileDialog

func _ready():
	_on_get_image_pressed()
	_on_generate_pressed()
	_on_download_button_pressed()
	
	# Configure OpenFileDialog
	open_file_dialog.file_mode = FileDialog.FILE_MODE_OPEN_FILE
	open_file_dialog.access = FileDialog.ACCESS_FILESYSTEM
	open_file_dialog.filters = ["*.png, *.jpg, *.jpeg ; Supported Images"]
	
	# Configure SaveFileDialog
	save_file_dialog.file_mode = FileDialog.FILE_MODE_SAVE_FILE
	save_file_dialog.access = FileDialog.ACCESS_FILESYSTEM
	save_file_dialog.filters = ["*.png ; PNG Images"]
	
	# Configure displayRestrict
	# $container/inputContainer/displayRestrict.size.x = 100
	# $container/inputContainer/displayRestrict.size.y = 100
	

func _on_get_image_pressed():
	open_file_dialog.popup_centered(Vector2(800, 600))

func _on_file_selected(path: String):	
	file_name_label.text = path
	
	original_image = Image.new()
	original_image.load(path)
	print(path)
	
	# Calculate max_height based on the loaded image's aspect ratio
	var aspect_ratio = float(original_image.get_height()) / float(original_image.get_width())
	max_height = int(MAX_WIDTH * aspect_ratio)
	
	var input_texture = ImageTexture.create_from_image(original_image)
	image_display.texture = input_texture
	
func ui_changes():
	var img_width = original_image.get_width()
	var btn_size = 	(img_width / 2) - 5

func _on_generate_pressed():
	if original_image == null:
		file_name_label.text = "No Selected Image"
		return
	
	original_image.resize(MAX_WIDTH, Image.INTERPOLATE_BILINEAR)
	
	# Step 1: Select the best 60 colors from the palette
	var full_palette = ColorPallet.get_palette()
	var best_colors = select_best_colors(full_palette, MAX_COLORS)
	
	# Step 2: Create a custom RgbQuant instance with the best colors
	var custom_rgb_quant = CustomRgbQuant.new(best_colors)
	
	# Step 3: Quantize the image using the custom RgbQuant instance
	pixelated_image = custom_rgb_quant.quantize_image(original_image)
	
	# Update UI or do something with the pixelated_image
	update_pixelated_image_display()

func select_best_colors(palette: Array, max_colors: int) -> Array:
	var color_scores = []
	for color in palette:
		var score = calculate_color_score(color, palette)
		color_scores.append({"color": color, "score": score})
	
	color_scores.sort_custom(func(a, b): return a.score > b.score)
	
	var best_colors = []
	for i in range(min(max_colors, color_scores.size())):
		best_colors.append(color_scores[i].color)
	
	return best_colors

func calculate_color_score(target_color: Color, palette: Array) -> float:
	var total_distance = 0.0
	for color in palette:
		if color != target_color:
			total_distance += Cie76Math.calculate_cie76(target_color, color)
	return total_distance

func update_pixelated_image_display():
	var output_texture = ImageTexture.create_from_image(pixelated_image)
	output_image.texture = output_texture

class CustomRgbQuant:
	var palette: Array
	
	func _init(custom_palette: Array):
		palette = custom_palette
	
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
	
	func find_closest_color(target_color: Color) -> Color:
		var closest_color = palette[0]
		var min_distance = INF
		
		for color in palette:
			var distance = Cie76Math.calculate_cie76(target_color, color)
			if distance < min_distance:
				min_distance = distance
				closest_color = color
		
		return closest_color

func _on_download_button_pressed():
	pass # Replace with function body.


func _on_print_button_pressed():
	pass # Replace with function body.

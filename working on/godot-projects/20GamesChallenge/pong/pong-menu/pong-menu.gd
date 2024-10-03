extends Control

const WindowSize = Vector2i(1152,648)

func _on_pv_c_pressed():
	DisplayServer.window_set_size(WindowSize)
	get_tree().change_scene_to_file("res://pong/pong vs cpu/pong.tscn")


func _on_pv_p_pressed():
	DisplayServer.window_set_size(WindowSize)
	get_tree().change_scene_to_file("res://pong/pong vs player/pong.tscn")


func _on_cv_c_pressed():
	DisplayServer.window_set_size(WindowSize)
	get_tree().change_scene_to_file("res://pong/cpu v cpu/pong.tscn")


func _on_home_pressed() -> void:
	get_tree().change_scene_to_file("res://main-menu/main_menu.tscn")

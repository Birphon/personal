extends Control

func _on_pv_c_pressed():
	get_tree().change_scene_to_file("res://pong/pong vs cpu/pong.tscn")


func _on_pv_p_pressed():
	get_tree().change_scene_to_file("res://pong/pong vs player/pong.tscn")


func _on_cv_c_pressed():
	get_tree().change_scene_to_file("res://pong/cpu v cpu/pong.tscn")

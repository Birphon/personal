extends Node

@export var mob_scene: PackedScene
var score

func game_over():
	$scoreTimer.stop()
	$mobTimer.stop()
	$HUD.show_game_over()
	$Music.stop()
	$DeathSound.play()

func new_game():
	score = 0
	$player.start($startPosition.position)
	$startTimer.start()
	$HUD.show_message("Get Ready")
	get_tree().call_group("mobs", "queue_free")
	$HUD.update_score(score)
	$Music.play()

func _on_mob_timer_timeout():
	var mob = mob_scene.instantiate()
	var mob_spawn_location = $mobPath/mobSpawnLocation
	mob_spawn_location.progress_ratio = randf()
	var direction = mob_spawn_location.rotation + PI / 2
	mob.position = mob_spawn_location.position
	direction += randf_range(-PI / 4, PI / 4)
	mob.rotation = direction
	var velocity = Vector2(randf_range(150.0, 250.0), 0.0)
	mob.linear_velocity = velocity.rotated(direction)
	add_child(mob)


func _on_start_timer_timeout():
	$mobTimer.start()
	$scoreTimer.start()
	$HUD.update_score(score)

func _on_score_timer_timeout():
	score += 1
	print(score)
	$HUD.update_score(score) # Just add the updater here LOL

func _on_score_tester_pressed(): # This is a button 
	score += 1
	print(score)



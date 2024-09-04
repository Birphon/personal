#NoEnv
SetBatchLines, -1
SetTimer, ClickMouse, 10800000 ; 3 hours in milliseconds

OnExit, ExitSub
#Esc::ExitApp  ; Press Esc to stop the script

ClickMouse:
    MouseClick, left
return

ExitSub:
    ExitApp  ; Stop the script
return
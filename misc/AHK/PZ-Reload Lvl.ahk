#NoEnv	; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input	; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%	; Ensures a consistent starting directory.
#MaxThreadsPerHotkey 2

F12::
    if Running
    {
        Running := false
    Return
}
Running := true
Loop {
    MouseClick, Left, 640, 35
    Sleep, 500
    MouseClick, Right, 640, 320
    Sleep, 500
    MouseClick, Left, 725, 500
    Sleep, 500

    if not Running
        Break
}

Running := false
return

Esc::
ExitApp
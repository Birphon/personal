#NoEnv	; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input	; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%	; Ensures a consistent starting directory.
#MaxThreadsPerHotkey 2

F5::
    if Running
    {
        Running := false
    Return
}
Running := true
Loop {
    MouseClick, , 2075, 1219
    Sleep, 3670
    MouseClick, , 544, 1025
    Sleep, 500
    MouseClick, , 1467, 854
    Sleep, 1500
    if not Running
        Break
}

Running := false
return

F6::
    if Running
    {
        Running := false
    Return
}
Running := true
Loop {
    Send, e
    Sleep, 4026
    if not Running
        Break
}

Running := false
return

F7::
    if Running
    {
        Running := false
    Return
}
Running := true
Loop {
    Send, e
    Sleep, 6310
    if not Running
        Break
}

Running := false
return

Esc::
ExitApp
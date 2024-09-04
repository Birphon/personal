#NoEnv	; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input	; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%	; Ensures a consistent starting directory.
#MaxThreadsPerHotkey 2

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
        Send, 0
        Sleep, 180000
        if not Running
            Break
    }

Running := false
return

Esc::
    ExitApp
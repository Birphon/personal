#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#MaxThreadsPerHotkey 2

F7::
    SendInput {Click down}
    return
F8::
    SendInput {w down}
    return

*F10::
    SendInput {Click up}
    SendInput {w up}
    return
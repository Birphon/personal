#MaxThreadsPerHotkey 3
#z::  ; Win+Z hotkey (change this hotkey to suit your preferences).
#MaxThreadsPerHotkey 1

F5::
    if Running
    {
        Running := false
    Return
}
Running := true
Loop { 
SendInput, F
Sleep, 1
    if not Running
        Break
}

Running := false
return

Esc::
ExitApp

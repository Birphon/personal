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
Send, @thetestgame#9575 
SendInput, {enter}
    if not Running
        Break
}

Running := false
return

Esc::
ExitApp
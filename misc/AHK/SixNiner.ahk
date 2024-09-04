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

Loop 69
{
    MouseClick, , 1274, 1400
    Sleep, 20
}

Running := false
return

Esc::
ExitApp


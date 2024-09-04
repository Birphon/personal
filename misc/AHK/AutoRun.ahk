#NoEnv	; Recommended for performance and compatibility with future AutoHotkey releases.
SetWorkingDir %A_ScriptDir%	; Ensures a consistent starting directory.
#MaxThreadsPerHotkey 2

#IfWinActive, ahk_exe Notepad.exe
^w::
    if Running
    {
        Running := false
        Return
    }
Running := true
Loop {
    Send, w
    if not Running
        Break
}

Running := false
return

Esc::
ExitApp


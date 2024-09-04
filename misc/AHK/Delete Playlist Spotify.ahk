#MaxThreadsPerHotkey 3
#z::
#MaxThreadsPerHotkey 1
if KeepWinZRunning
{
    KeepWinZRunning := false
    return
}
KeepWinZRunning := true
Loop ; This is for Spotify made playlists
{
    MouseClick, right, 64, 444 ; Right clicks play list
    Sleep 750
    MouseClick, left, 141, 598 ; Removes from profile
    Sleep 750
    if not KeepWinZRunning
        break  
}
KeepWinZRunning := false 
return

#MaxThreadsPerHotkey 3
#x::  
#MaxThreadsPerHotkey 1
if KeepWinXRunning  
{
    KeepWinXRunning := false  
    return 
}
KeepWinXRunning := true
Loop ; This if for human made playlists
{
    
    MouseClick, right, 64, 444 ; Right clicks playlist
    Sleep 750
    MouseClick, left, 147, 625 ; Selects Delete
    Sleep 750
    MouseClick, left, 1371, 796 ; Selects Delete again
    Sleep 750
    if not KeepWinXRunning
        break
}
KeepWinXRunning := false
return


#MaxThreadsPerHotkey 3
#c::  
#MaxThreadsPerHotkey 1
if KeepWinCRunning  
{
    KeepWinCRunning := false  
    return 
}
KeepWinCRunning := true
Loop ; Deleting Albums
{
    MouseClick, right, 387, 467 ; Right clicks play list
    Sleep 1000
    MouseClick, left, 462, 575 ; Removes from profile
    Sleep 1000
    if not KeepWinCRunning
        break  
}
KeepWinCRunning := false
return


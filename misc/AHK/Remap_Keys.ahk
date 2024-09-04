#numpad::
    ; Get the layout of the current keyboard
    layoutCode := GetKeyboardLayout()
    ; Check if the current keyboard layout is the US layout
    if (layoutCode = "00000409")
    {
        ; Check if the current keyboard is the specific keyboard you want to remap
        if (GetKeyboardName() = "Keyboard 1")
        {
            if (A_PriorHotkey = #numpad)
            {
                SetNumPadKeys()
            }
            else
            {
                SetRegularKeys()
            }
        }
    }
    return



; Set keys to regular layout
SetRegularKeys()
{
    NumLock::a
    Numpad1::b
    Numpad2::c
    Numpad3::d
    Numpad4::e
    Numpad5::f
    Numpad6::g
    Numpad7::h
    Numpad8::i
    Numpad9::j
    Numpad0::k
    NumpadDiv::l
    NumpadMult::m
    NumpadAdd::n
    NumpadSub::o
    NumpadEnter::p
    NumpadDec::q
}

; Set keys to numpad layout
SetNumPadKeys()
{
    NumLock::NumLock
    Numpad1::Numpad1
    Numpad2::Numpad2
    Numpad3::Numpad3
    Numpad4::Numpad4
    Numpad5::Numpad5
    Numpad6::Numpad6
    Numpad7::Numpad7
    Numpad8::Numpad8
    Numpad9::Numpad9
    Numpad0::Numpad0
    NumpadDiv::NumpadDiv
    NumpadMult::NumpadMult
    NumpadAdd::NumpadAdd
    NumpadSub::NumpadSub
    NumpadEnter::NumpadEnter
    NumpadDec::NumpadDec
}

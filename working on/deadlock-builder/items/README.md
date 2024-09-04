
# Note

The following JSON will read as follows:

```http
"t1": {
    X": {
        "s1": "",
        "s2": "",
        "s3": "",
        "s4": "",
        "p": "",
        "ps": {
            "effect": "",
            "condition": "",
            "duration": "",
            "cooldown": ""
        },
        "a": "",
        "as": {
            "effect": "",
            "duration": "",
            "cooldown": ""
        },
        "c": ""
    }
},
"t2": {
    X": {
        "s1": "",
        "s2": "",
        "s3": "",
        "s4": "",
        "p": "",
        "ps": {
            "effect": "",
            "condition": "",
            "duration": "",
            "cooldown": ""
        },
        "a": "",
        "as": {
            "effect": "",
            "duration": "",
            "cooldown": ""
        },
        "c": ""
    }
}
```

An explantion can be seen as: 
| EntryPoint | Desc |
|------------|------| 
| t1 | this indicates the tier of the item being "Tier 1" aka 500 soul cost|
| X | this is a place holder for the name of the item |
| s1 | is 'stat' 1, the first stat that comes up |
| s2-4 | follows the same as s1 for their respective stat line |
| p | passive text |
| ps | container for the passive details |
| effect | the stat for the passive i.e. +45 Weapon Damage on Headshot |
| condition | requirement for the passive i.e. Headshot |
| duration | how long the duration is of the passive |
| cooldown | how long till the next activation |
| a | active |
| as | container for the active details |
| effect | the stat for the active i.e. +45 Weapon Damage on Headshot |
| duration | how long the duration is of the active |
| cooldown | how long till the next activation |
| c | component - if the item is a component of another item i.e. basic magazine is a component of Titanic Magazine so Titanic Magazine would be put for Basic Magazines 'c' |


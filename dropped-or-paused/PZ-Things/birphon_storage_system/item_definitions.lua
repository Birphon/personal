-- item_definitions.lua
Items = {
    -- Input Crate
    InputCrate = {
        name = "Input Crate",
        categories = { "Container" },
        weight = 5,
        type = "Container",
        isStorable = true,
        capacityInside = 50,
    },

    -- Blank Crate
    BlankCrate = {
        name = "Blank Crate",
        categories = { "Container" },
        weight = 5,
        type = "Container",
        isStorable = true,
        capacityInside = 50,
    },

    -- Unsort Crate
    UnsortCrate = {
        name = "Unsort Crate",
        categories = { "Container" },
        weight = 5,
        type = "Container",
        isStorable = true,
        capacityInside = 100,
        isPlaceable = true,
    },

    -- Combined Crate
    CombinedCrate = {
        name = "Combined Crate",
        categories = { "Container" },
        weight = 5,
        type = "Container",
        isStorable = true,
        capacityInside = 50,
        isPlaceable = true,
    },

    -- TODO: Add other Crates
}
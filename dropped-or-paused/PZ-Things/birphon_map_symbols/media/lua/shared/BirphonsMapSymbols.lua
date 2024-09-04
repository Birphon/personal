-- if you brainlessly copypaste this, at least change symbol/texture prefix; you know who you are --

local function map_symbol(name)
    MapSymbolDefinitions.getInstance():addTexture("extra:" .. name, "media/ui/ExtraMapSymbols/" .. name .. ".png")
end

-- four icons per row --

map_symbol("water")
map_symbol("food")
map_symbol("pills")
map_symbol("book")

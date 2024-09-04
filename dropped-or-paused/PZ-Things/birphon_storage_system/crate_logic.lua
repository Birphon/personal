local function onItemAddedToInputCrate(player, item, crate)
    local category = getCategoryForItem(item)
    local combinedCrate = findCombinedCrateForCategory(category)

    if combinedCrate then
        combinedCrate:addItem(item)
    else
        local unsortCrate = findUnsortCrate()
        unsortCrate:addItem(item)
    end
end

local function onCrateCreated(crate)
    if crate:getType() == "BlankCrate" then
        local combinedCrateItem = player:getInventory():getItemFromType("CombinedCrate")
        if combinedCrateItem then
            local category = getCategoryForItem(combinedCrateItem)
            combinedCrateItem:setName(category .. " Crate")
            player:getInventory():RemoveItem(combinedCrateItem)
            placeCombinedCrate(combinedCrateItem, player:getX(), player:getY(), player:getZ())
        end
    end
end
-- TODO: Helper Function

Events.OnItemAddedToContainer.Add(onItemAddedToInputCrate)
Events.OnCreatedNewContainer.Add(onCrateCreated)
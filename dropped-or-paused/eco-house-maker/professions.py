

""" Dictionary of Professions divied into "Game Stages" based on the In Game Tech Tree """
professions_dict = {
    "Stage 0": {
        "Gathering": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Mining": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
		"Logging": {
			"Level 1": ["Butchery Table", "Hewn Chair"],
			"Level 2": ["Hewn Table", "Hewn Bench"],
			"Level 3": ["Hewn Dresser"], 
			"Level 4": ["Hewn Nightstand"], 
			"Level 5": None, 
			"Level 6": None,
			"Level 7": None 
		},
        "Campfire Cooking": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Hunting": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": ["Bison Mount", "Elk Mount", "Goat Mount", "Sheep Mount"],
            "Level 5": ["Stuffed Bison", "Stuffed Elk", "Stuffed Jaguar", "Stuffed Goat", "Stuffed Wolf", "Stuffed Alligator"],
            "Level 6": None,
            "Level 7": None
        }
    },
    "Stage 1": {
        "Carpentry": {
            "Level 1": ["Icebox","Wooden Straw Bed"],
            "Level 2": ["Lumber Chair", "Decrotive Ship Wheel", "Wooden Latrine"],
            "Level 3": ["Lumber Bench"],
            "Level 4": ["Bookshelf", "Ornate Frame", "Wooden Frame","Towel Rack"],
            "Level 5": ["Lumber Dresser", "Shelf Cabinet", "Wooden Ceiling Light", "Wooden Floor Lamp"],
            "Level 6": ["Lumber Table","Kitchen","Wooden Kitchen Lamp","Wooden Table Lamp","Wooden Fabric Bed"],
            "Level 7": None
        },
        "Masonry": {
            "Level 1": ["Mill","Stone Brazier", "Mortared Stone Chair"],
            "Level 2": ["Mortared Stone Table", "Limestone Otter Statue", "Tallow Lmap"],
            "Level 3": ["Mortared Stone Bench", "Limestone Wolf Statue"],
            "Level 4": ["Limestone Owl Statue"],
            "Level 5": ["Mortared Stone Fireplace"],
            "Level 6": ["Limestone Bison Statue"],
            "Level 7": None
        },
        "Farming": {
            "Level 1": None,
            "Level 2": ["Tallow Candle"],
            "Level 3": ["Salt Basket"],
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Shipwright": {
            "Level 1": None,
            "Level 2": ["Decrotive Life Preserver"],
            "Level 3": None,
            "Level 4": ["Decrotive Hanging Buoy"],
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Cooking": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Baking": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Butchery": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        }
    },
    "Stage 1.5": {
        "Basic Engineering": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Smelting": {
            "Level 1": None,
            "Level 2": ["Brazier"],
            "Level 3": ["Candle Stand", "Ceiling Candle", "Wall Candle", "Tallow Wall Lamp"],
            "Level 4": ["Decrotive Anchor", "Orante Gold Frame", "Orante Iron Frame", "Gold Frame", "Iron Frame", "Copper Frame"],
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Paper Milling": {
            "Level 1": ["Large Festive Paper Lantern","Large Paper Lantern","Small Paper Lantern"],
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Fertilizers": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Milling": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Tailoring": {
            "Level 1": ["Padded Chair", "Rug Small"],
            "Level 2": ["Weave Small Cotton Bunting Red","Weave Large Cotton Bunting Red","Large Cotton Bunting Red","Large Nylon Bunting Red","Small Cotton Bunting Red","Small Nylon Bunting Red"],
            "Level 3": ["Nylon Futon Couch", "Couch", "Rug Medium", "Small Bath Mat", "Washboard"],
            "Level 4": None,
            "Level 5": None,
            "Level 6": ["Nylon Futon Bed", "Cast Iron Bed", "Weave Large Bath Mat", "Large Bath Mat", "Rug Large", "Weave Small Bath Mat", "Upholstered Chair","Upholstered Couch"],
            "Level 7": ["Cast Iron Royal Bed"]
        }
    },
    "Stage 2": {
        "Pottery": {
            "Level 1": ["Bakery Oven"],
            "Level 2": ["Round Pot", "Square Pot"],
            "Level 3": ["Brick Fireplace"],
            "Level 4": ["Small Sink", "Toilet"],
            "Level 5": None,
            "Level 6": None,
            "Level 7": ["Bathtub"]
        },
        "Mechanics": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": ["Sink"],
            "Level 5": ["Stove"],
            "Level 6": None,
            "Level 7": None
        },
        "Glassworking": {
            "Level 1": ["Orange Vase","Galaxy Vase","Plant Vase","Swirl Vase","Purple Vase","Red Vase"],
            "Level 2": ["Decrotive Glass Bouy"],
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Advanced Smelting": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        }
    },
    "Stage 3": {
        "Advanced Cooking": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Advanced Baking": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Advanced Masonry": {
            "Level 1": ["Ashlar Stone Chair"],
            "Level 2": ["Ashlar Stone Table"],
            "Level 3": None,
            "Level 4": ["Ashlar Stone Bench","Ashlar Large Stone Fountain","Ashlar Small Stone Fountain"],
            "Level 5": ["Adorned Ashlar Stone Chair"],
            "Level 6": ["Adorned Ashlar Stone Table","Adorned Ashlar Stone Fireplace"],
            "Level 7": ["Adorned Ashlar Stone Bench"],
        },
        "Oil Drilling": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Composites": {
            "Level 1": ["Composite Lumber Chair"],
            "Level 2": None,
            "Level 3": ["Composite Lumber Table","Composite Lumber Bench"],
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        },
        "Electronics": {
            "Level 1": ["Electric Wall Lamp", "Steel Ceiling Lamp"],
            "Level 2": ["Steel Table Lamp"],
            "Level 3": ["Steel Square Fixture","Steel Kitchen Lamp"],
            "Level 4": ["Steel Hanging Fixture","Steel Hanging Lamp", "Steel Abstract Fixture"],
            "Level 5": ["Modern Double Street Lamp","Modern Street Lamp","Street Lamp"],
            "Level 6": None,
            "Level 7": None
        },
        "Industry": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": ["Washing Machine"],
            "Level 4": ["Refrigerator"],
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        }
    },
    "Stage 4": {
        "Cutting Edge Cooking": {
            "Level 1": None,
            "Level 2": None,
            "Level 3": None,
            "Level 4": None,
            "Level 5": None,
            "Level 6": None,
            "Level 7": None
        }
    }
}


const RECIPES = [
  {
    "id": "crafting_table",
    "name": "Crafting Table",
    "category": "Blocks",
    "output": 1,
    "ingredients": [
      "Oak Planks × 4"
    ],
    "pattern": [
      "PPP",
      "PPP",
      "..."
    ],
    "note": "Any wood planks work.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "chest",
    "name": "Chest",
    "category": "Blocks",
    "output": 1,
    "ingredients": [
      "Any Planks × 8"
    ],
    "pattern": [
      "PPP",
      "P.P",
      "PPP"
    ],
    "note": "Use any matching plank type.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "furnace",
    "name": "Furnace",
    "category": "Blocks",
    "output": 1,
    "ingredients": [
      "Cobblestone × 8"
    ],
    "pattern": [
      "CCC",
      "C.C",
      "CCC"
    ],
    "note": "Cobblestone can be replaced by cobbled deepslate or blackstone.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "torch",
    "name": "Torch",
    "category": "Blocks",
    "output": 4,
    "ingredients": [
      "Coal or Charcoal × 1",
      "Stick × 1"
    ],
    "pattern": [
      "C..",
      "S..",
      "..."
    ],
    "note": "Place coal or charcoal above a stick.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "stick",
    "name": "Stick",
    "category": "Materials",
    "output": 4,
    "ingredients": [
      "Any Planks × 2"
    ],
    "pattern": [
      "P..",
      "P..",
      "..."
    ],
    "note": "Two planks stacked vertically.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "wooden_pickaxe",
    "name": "Wooden Pickaxe",
    "category": "Tools",
    "output": 1,
    "ingredients": [
      "Any Planks × 3",
      "Stick × 2"
    ],
    "pattern": [
      "PPP",
      ".S.",
      " .S"
    ],
    "note": "The same pattern works with stone, iron, gold, diamond, or netherite tiers (with the appropriate upgrade process for netherite).",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "stone_pickaxe",
    "name": "Stone Pickaxe",
    "category": "Tools",
    "output": 1,
    "ingredients": [
      "Cobblestone × 3",
      "Stick × 2"
    ],
    "pattern": [
      "CCC",
      ".S.",
      " .S"
    ],
    "note": "Cobblestone can be replaced by cobbled deepslate or blackstone.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "iron_sword",
    "name": "Iron Sword",
    "category": "Weapons",
    "output": 1,
    "ingredients": [
      "Iron Ingot × 2",
      "Stick × 1"
    ],
    "pattern": [
      "I..",
      "I..",
      "S.."
    ],
    "note": "Use the same shape for other sword materials.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "bow",
    "name": "Bow",
    "category": "Weapons",
    "output": 1,
    "ingredients": [
      "Stick × 3",
      "String × 3"
    ],
    "pattern": [
      ".ST",
      "S.T",
      ".ST"
    ],
    "note": "The curved pattern uses three sticks and three string.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "arrow",
    "name": "Arrow",
    "category": "Weapons",
    "output": 4,
    "ingredients": [
      "Flint × 1",
      "Stick × 1",
      "Feather × 1"
    ],
    "pattern": [
      "F..",
      "S..",
      "T.."
    ],
    "note": "One recipe produces four arrows.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "shield",
    "name": "Shield",
    "category": "Tools",
    "output": 1,
    "ingredients": [
      "Any Planks × 6",
      "Iron Ingot × 1"
    ],
    "pattern": [
      "PIP",
      "PPP",
      ".P."
    ],
    "note": "Any plank type can be used.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "ladder",
    "name": "Ladder",
    "category": "Blocks",
    "output": 3,
    "ingredients": [
      "Stick × 7"
    ],
    "pattern": [
      "S.S",
      "SSS",
      "S.S"
    ],
    "note": "Produces three ladders.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "glass_pane",
    "name": "Glass Pane",
    "category": "Blocks",
    "output": 16,
    "ingredients": [
      "Glass × 6"
    ],
    "pattern": [
      "...",
      "GGG",
      "GGG"
    ],
    "note": "Produces sixteen glass panes.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "paper",
    "name": "Paper",
    "category": "Materials",
    "output": 3,
    "ingredients": [
      "Sugar Cane × 3"
    ],
    "pattern": [
      "...",
      "SSS",
      "..."
    ],
    "note": "Produces three paper.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "book",
    "name": "Book",
    "category": "Materials",
    "output": 1,
    "ingredients": [
      "Paper × 3",
      "Leather × 1"
    ],
    "pattern": [
      "P..",
      "P.L",
      "P.."
    ],
    "note": "Place the leather beside the middle paper.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "bread",
    "name": "Bread",
    "category": "Food",
    "output": 1,
    "ingredients": [
      "Wheat × 3"
    ],
    "pattern": [
      "...",
      "...",
      "WWW"
    ],
    "note": "Three wheat in a horizontal row.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "cake",
    "name": "Cake",
    "category": "Food",
    "output": 1,
    "ingredients": [
      "Milk Bucket × 3",
      "Sugar × 2",
      "Egg × 1",
      "Wheat × 3"
    ],
    "pattern": [
      "MMM",
      "SES",
      "WWW"
    ],
    "note": "The three empty buckets are returned after crafting.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "golden_apple",
    "name": "Golden Apple",
    "category": "Food",
    "output": 1,
    "ingredients": [
      "Apple × 1",
      "Gold Ingot × 8"
    ],
    "pattern": [
      "GGG",
      "GAG",
      "GGG"
    ],
    "note": "Surround one apple with eight gold ingots.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "boat",
    "name": "Oak Boat",
    "category": "Transportation",
    "output": 1,
    "ingredients": [
      "Oak Planks × 5"
    ],
    "pattern": [
      "P.P",
      "PPP",
      "..."
    ],
    "note": "Use matching planks; a wooden shovel is not needed in current versions.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "rail",
    "name": "Rail",
    "category": "Transportation",
    "output": 16,
    "ingredients": [
      "Iron Ingot × 6",
      "Stick × 1"
    ],
    "pattern": [
      "I.I",
      "ISI",
      "I.I"
    ],
    "note": "Produces sixteen rails.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "bucket",
    "name": "Bucket",
    "category": "Tools",
    "output": 1,
    "ingredients": [
      "Iron Ingot × 3"
    ],
    "pattern": [
      "I.I",
      ".I.",
      "..."
    ],
    "note": "Use a bucket to collect water, lava, or milk.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "anvil",
    "name": "Anvil",
    "category": "Blocks",
    "output": 1,
    "ingredients": [
      "Iron Block × 3",
      "Iron Ingot × 4"
    ],
    "pattern": [
      "BBB",
      " I ",
      "III"
    ],
    "note": "Anvil durability decreases with use.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "enchanting_table",
    "name": "Enchanting Table",
    "category": "Blocks",
    "output": 1,
    "ingredients": [
      "Book × 1",
      "Diamond × 2",
      "Obsidian × 4"
    ],
    "pattern": [
      ".B.",
      "DOD",
      "OOO"
    ],
    "note": "Requires diamonds and obsidian.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "ender_chest",
    "name": "Ender Chest",
    "category": "Blocks",
    "output": 1,
    "ingredients": [
      "Obsidian × 8",
      "Eye of Ender × 1"
    ],
    "pattern": [
      "OOO",
      "OEO",
      "OOO"
    ],
    "note": "Each player accesses their own linked Ender Chest inventory.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "piston",
    "name": "Piston",
    "category": "Redstone",
    "output": 1,
    "ingredients": [
      "Any Planks × 3",
      "Cobblestone × 4",
      "Iron Ingot × 1",
      "Redstone Dust × 1"
    ],
    "pattern": [
      "PPP",
      "CIC",
      "CRC"
    ],
    "note": "The piston face points toward the top of the grid.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "hopper",
    "name": "Hopper",
    "category": "Redstone",
    "output": 1,
    "ingredients": [
      "Iron Ingot × 5",
      "Chest × 1"
    ],
    "pattern": [
      "I.I",
      "ICI",
      ".I."
    ],
    "note": "Moves items between containers.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "redstone_torch",
    "name": "Redstone Torch",
    "category": "Redstone",
    "output": 1,
    "ingredients": [
      "Redstone Dust × 1",
      "Stick × 1"
    ],
    "pattern": [
      "...",
      "R..",
      "S.."
    ],
    "note": "A redstone power source.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "compass",
    "name": "Compass",
    "category": "Tools",
    "output": 1,
    "ingredients": [
      "Iron Ingot × 4",
      "Redstone Dust × 1"
    ],
    "pattern": [
      ".I.",
      "IRI",
      ".I."
    ],
    "note": "Points toward world spawn in the Overworld.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "clock",
    "name": "Clock",
    "category": "Tools",
    "output": 1,
    "ingredients": [
      "Gold Ingot × 4",
      "Redstone Dust × 1"
    ],
    "pattern": [
      ".G.",
      "GRG",
      ".G."
    ],
    "note": "Shows the approximate time of day.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  },
  {
    "id": "trident",
    "name": "Trident",
    "category": "Weapons",
    "output": 0,
    "ingredients": [],
    "pattern": [
      "...",
      "...",
      "..."
    ],
    "note": "Tridents cannot be crafted; they are obtained from drowned mobs.",
    "symbols": {
      "P": "Planks",
      "C": "Cobblestone",
      "S": "Stick",
      "I": "Iron Ingot",
      "G": "Gold Ingot",
      "F": "Flint",
      "T": "String / Feather (see recipe notes)",
      "W": "Wheat",
      "M": "Milk Bucket",
      "E": "Eye of Ender",
      "O": "Obsidian",
      "R": "Redstone Dust",
      "A": "Apple",
      "B": "Book",
      "D": "Diamond",
      "L": "Leather"
    }
  }
];

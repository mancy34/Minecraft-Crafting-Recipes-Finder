# Minecraft Crafting Recipes Finder

A lightweight, offline Chrome extension for quickly looking up Minecraft crafting recipes.

## Install in Chrome
1. Extract the ZIP file.
2. Open `chrome://extensions` in Google Chrome.
3. Turn on **Developer mode** (top-right).
4. Click **Load unpacked**.
5. Select the extracted `Minecraft Crafting Recipes Finder` folder.
6. Pin the extension from Chrome's Extensions menu for quick access.

## Features
- Search by item name or ingredient.
- Filter by recipe category.
- View a 3×3 crafting table pattern.
- See required materials and output quantity.
- Works offline after installation; no account or API key required.

## Files
- `manifest.json` — Chrome Manifest V3 configuration.
- `popup.html` — extension popup layout.
- `styles.css` — popup styling and responsive layout.
- `popup.js` — search, filters, and recipe rendering.
- `recipes.js` — local recipe dataset.

## Recipe data note
This is a starter reference dataset, not a complete Minecraft recipe database. Minecraft recipes can differ by edition and game version. Check the in-game recipe book for version-specific details. The Trident entry is included as a useful non-craftable item example. The crafting grid uses letter abbreviations for ingredients; the full material names are listed below it.

## Customizing
Add or edit recipe objects in `recipes.js`. Each recipe uses:
- `name`, `category`, `output`
- `ingredients` — readable ingredient list
- `pattern` — three strings, each three characters wide; `.` means empty
- `note` — optional recipe note

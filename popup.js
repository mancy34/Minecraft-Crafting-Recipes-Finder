const categories = ["All", ...new Set(RECIPES.map(r => r.category))];
const categoryEl = document.getElementById("categories");
const listEl = document.getElementById("recipeList");
const detailEl = document.getElementById("detail");
const searchEl = document.getElementById("search");
const clearEl = document.getElementById("clearSearch");
const countEl = document.getElementById("resultCount");
let activeCategory = "All";
let selectedId = "crafting_table";

const icons = {
  "Crafting Table":"🪚","Chest":"📦","Furnace":"🔥","Torch":"🔦","Stick":"🪵",
  "Wooden Pickaxe":"⛏️","Stone Pickaxe":"⛏️","Iron Sword":"⚔️","Bow":"🏹",
  "Arrow":"➶","Shield":"🛡️","Ladder":"🪜","Glass Pane":"🪟","Paper":"📄",
  "Book":"📖","Bread":"🍞","Cake":"🎂","Golden Apple":"🍎","Oak Boat":"🛶",
  "Rail":"🛤️","Bucket":"🪣","Anvil":"⚒️","Enchanting Table":"✨","Ender Chest":"🟪",
  "Piston":"🧱","Hopper":"📥","Redstone Torch":"🔴","Compass":"🧭","Clock":"🕒","Trident":"🔱"
};
const symbolLabels = {"P":"P","C":"C","S":"S","I":"I","G":"G","F":"F","T":"T","W":"W","M":"M","E":"E","O":"O","R":"R","A":"A","B":"B","D":"D","L":"L"};

function renderCategories(){
  categoryEl.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "category" + (category === activeCategory ? " active" : "");
    button.textContent = category;
    button.addEventListener("click", () => { activeCategory = category; renderCategories(); renderList(); });
    categoryEl.appendChild(button);
  });
}
function filteredRecipes(){
  const term = searchEl.value.trim().toLowerCase();
  return RECIPES.filter(r =>
    (activeCategory === "All" || r.category === activeCategory) &&
    (r.name.toLowerCase().includes(term) || r.ingredients.join(" ").toLowerCase().includes(term))
  );
}
function renderList(){
  const items = filteredRecipes();
  countEl.textContent = items.length;
  clearEl.style.display = searchEl.value ? "block" : "none";
  listEl.innerHTML = "";
  if(!items.length){ listEl.innerHTML = '<div class="no-results">No recipes found.<br>Try another item name.</div>'; return; }
  items.forEach(r => {
    const button = document.createElement("button");
    button.className = "recipe-item" + (r.id === selectedId ? " selected" : "");
    button.innerHTML = `<span class="item-icon">${icons[r.name] || "🧩"}</span><span class="item-copy"><span class="item-name">${escapeHtml(r.name)}</span><span class="item-category">${escapeHtml(r.category)}</span></span><span class="chevron">›</span>`;
    button.addEventListener("click", () => { selectedId = r.id; renderList(); renderDetail(r); });
    listEl.appendChild(button);
  });
  if(!items.some(r => r.id === selectedId)){ selectedId = items[0].id; renderDetail(items[0]); }
}
function renderDetail(r){
  if(!r) return;
  const isCraftable = r.output > 0;
  const cells = r.pattern.flatMap(row => [...row]);
  const grid = cells.map(symbol => {
    const filled = symbol !== ".";
    return `<div class="slot ${filled ? "filled" : ""}">${filled ? `<span class="symbol">${symbolLabels[symbol] || symbol}</span>` : ""}</div>`;
  }).join("");
  const ingredients = r.ingredients.length
    ? r.ingredients.map(item => `<span class="ingredient">${escapeHtml(item)}</span>`).join("")
    : '<span class="ingredient">Not craftable</span>';
  detailEl.innerHTML = `
    <div class="detail-header"><div><div class="eyebrow">${escapeHtml(r.category)}</div><h2>${escapeHtml(r.name)}</h2></div>
    <div class="output-pill">${isCraftable ? `Output × ${r.output}` : "Not craftable"}</div></div>
    <div class="crafting-layout">
      <div><div class="grid-label">CRAFTING TABLE</div><div class="craft-grid">${grid}</div></div>
      <div class="arrow">→</div>
      <div><div class="result-label">RESULT</div><div class="result-slot">${icons[r.name] || "🧩"}</div></div>
    </div>
    <h3 class="ingredients-title">REQUIRED MATERIALS</h3>
    <div class="ingredients">${ingredients}</div>
    <div class="recipe-note">${escapeHtml(r.note || "Arrange the materials as shown in the crafting grid.")}</div>
  `;
}
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
searchEl.addEventListener("input", renderList);
clearEl.addEventListener("click", () => { searchEl.value = ""; searchEl.focus(); renderList(); });
renderCategories();
renderList();
renderDetail(RECIPES.find(r => r.id === selectedId));

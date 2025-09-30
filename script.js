const recipesContainer = document.querySelector('.recipes');
const addBtn = document.getElementById('add-btn');
const recipeNameInput = document.getElementById('recipe-name');
const recipeTypeInput = document.getElementById('recipe-type');

// Sample initial recipes
let recipes = [
  { name: "Paneer Butter Masala", type: "Veg" },
  { name: "Chicken Biryani", type: "Non-Veg" },
  { name: "Veg Noodles", type: "Veg" }
];

// Function to display recipes
function displayRecipes() {
  recipesContainer.innerHTML = '';
  recipes.forEach(recipe => {
    const div = document.createElement('div');
    div.className = 'recipe-card';
    div.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.type}</p>`;
    recipesContainer.appendChild(div);
  });
}

// Add new recipe
addBtn.addEventListener('click', () => {
  const name = recipeNameInput.value.trim();
  const type = recipeTypeInput.value.trim();

  if (name && type) {
    recipes.push({ name, type });
    recipeNameInput.value = '';
    recipeTypeInput.value = '';
    displayRecipes();
  } else {
    alert("Please enter both recipe name and type.");
  }
});

// Initial display
displayRecipes();

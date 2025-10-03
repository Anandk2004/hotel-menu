// --- Select DOM elements ---
const recipesContainer = document.querySelector('.recipes');
const categoryButtons = document.querySelectorAll('.categories button');
const featuredContainer = document.querySelector('.featured-recipe');

// --- Recipes array ---
const recipes = [
  // Main Course
  { name: "Paneer Butter Masala", type: "Veg", category: "main-course", image: "./assets/paneer.jpg", desc: "Creamy, buttery curry loved by hostel students missing home.", price: "₹250" },
  { name: "Chicken Biryani", type: "Non-Veg", category: "main-course", image: "./assets/chicken.jpg", desc: "Fragrant rice layered with juicy chicken and spices.", price: "₹300" },
  { name: "Fish Curry", type: "Non-Veg", category: "main-course", image: "./assets/Fish-Curry.jpg", desc: "Rich, tangy curry that reminds coastal students of home.", price: "₹280" },
  { name: "Punjabi Mutton Curry", type: "Non-Veg", category: "main-course", image: "./assets/punjabi mutton curry.jpg", desc: "Slow-cooked mutton in authentic Punjabi spices.", price: "₹350" },
  { name: "Mixed Vegetable Curry", type: "Veg", category: "main-course", image: "./assets/mixed-veg-curry.jpg", desc: "A wholesome blend of fresh veggies in a flavorful sauce.", price: "₹220" },
  { name: "Dal Tadka", type: "Veg", category: "main-course", image: "./assets/dal-tadka.jpg", desc: "Classic lentil dish tempered with spices and herbs.", price: "₹180" },
  { name: "Butter Chicken", type: "Non-Veg", category: "main-course", image: "./assets/butter-chicken.jpg", desc: "Rich, creamy chicken curry loved by all.", price: "₹320" },
  { name: "Vegetable Pulao", type: "Veg", category: "main-course", image: "./assets/veg-pulao.jpg", desc: "Aromatic rice cooked with fresh vegetables and spices.", price: "₹200" },
  { name: "Chole Bhature", type: "Veg", category: "main-course", image: "./assets/chole-bhature.jpg", desc: "Spicy chickpeas with fluffy fried bread, classic North Indian.", price: "₹180" },
  { name: "Egg Curry", type: "Non-Veg", category: "main-course", image: "./assets/egg-curry.jpg", desc: "Boiled eggs in a spicy tomato-onion gravy.", price: "₹220" },
  { name: "Paneer Tikka Masala", type: "Veg", category: "main-course", image: "./assets/paneer-tikka-masala.jpg", desc: "Grilled paneer cubes in rich creamy masala.", price: "₹260" },
  { name: "Lamb Rogan Josh", type: "Non-Veg", category: "main-course", image: "./assets/lamb-rogan-josh.jpg", desc: "Slow-cooked lamb curry with aromatic spices.", price: "₹360" },
  { name: "Jeera Rice", type: "Veg", category: "main-course", image: "./assets/jeera-rice.jpg", desc: "Fragrant basmati rice tempered with cumin seeds.", price: "₹150" },
  { name: "Veg Biryani", type: "Veg", category: "main-course", image: "./assets/veg-biryani.jpg", desc: "Aromatic rice layered with vegetables and spices.", price: "₹240" },
  { name: "Mutton Korma", type: "Non-Veg", category: "main-course", image: "./assets/mutton-korma.jpg", desc: "Rich and creamy mutton curry cooked with nuts and spices.", price: "₹380" },

  // Starters
  { name: "Veg Noodles", type: "Veg", category: "starters", image: "./assets/Veg-Hakka-Noodles.jpg", desc: "Quick snack for late-night study sessions.", price: "₹120" },
  { name: "Spring Rolls", type: "Veg", category: "starters", image: "./assets/spring-rolls.jpg", desc: "Crispy rolls filled with fresh vegetables and spices.", price: "₹100" },
  { name: "Chicken Wings", type: "Non-Veg", category: "starters", image: "./assets/chicken-wings.jpg", desc: "Spicy and tangy wings perfect for group snacks.", price: "₹200" },
  { name: "Paneer Tikka", type: "Veg", category: "starters", image: "./assets/paneer-tikka.jpg", desc: "Grilled paneer cubes marinated in spices.", price: "₹180" },
  { name: "French Fries", type: "Veg", category: "starters", image: "./assets/french-fries.jpg", desc: "Crispy golden fries perfect for snacks.", price: "₹90" },
  { name: "Fish Fingers", type: "Non-Veg", category: "starters", image: "./assets/fish-finger.jpg", desc: "Crispy fried fish sticks, ideal starter for seafood lovers.", price: "₹220" },
  { name: "Cheese Balls", type: "Veg", category: "starters", image: "./assets/cheese-balls.jpg", desc: "Golden fried balls stuffed with cheesy goodness.", price: "₹150" },
  { name: "Chicken Pakora", type: "Non-Veg", category: "starters", image: "./assets/chicken-pakora.jpg", desc: "Spicy battered chicken fried to perfection.", price: "₹180" },
  { name: "Hara Bhara Kabab", type: "Veg", category: "starters", image: "./assets/hara-bhara-kabab.jpg", desc: "Spinach and peas kababs, healthy yet tasty.", price: "₹140" },
  { name: "Garlic Bread", type: "Veg", category: "starters", image: "./assets/garlic-bread.jpg", desc: "Toasted bread with garlic butter, crispy and soft.", price: "₹100" },
  { name: "Veg Pakora", type: "Veg", category: "starters", image: "./assets/veg-pakora.jpg", desc: "Mixed vegetables dipped in spiced gram flour and fried.", price: "₹120" },

  // Desserts
  { name: "Gulab Jamun", type: "Dessert", category: "desserts", image: "./assets/Gulab Jamun.jpg", desc: "Soft, spongy sweet soaked in sugar syrup.", price: "₹80" },
  { name: "Chocolate Brownie", type: "Dessert", category: "desserts", image: "./assets/chocolate-brownie.jpg", desc: "Rich, gooey chocolate delight for sweet cravings.", price: "₹120" },
  { name: "Rasgulla", type: "Dessert", category: "desserts", image: "./assets/rasgulla.jpg", desc: "Soft cheese balls soaked in light sugar syrup.", price: "₹80" },
  { name: "Ice Cream Sundae", type: "Dessert", category: "desserts", image: "./assets/ice-cream-sundae.jpg", desc: "Cold, creamy ice cream topped with syrup and nuts.", price: "₹100" },
  { name: "Jalebi", type: "Dessert", category: "desserts", image: "./assets/jalebi.jpg", desc: "Sweet, crispy spirals soaked in sugar syrup.", price: "₹70" },
  { name: "Kheer", type: "Dessert", category: "desserts", image: "./assets/kheer.jpg", desc: "Creamy rice pudding flavored with cardamom and nuts.", price: "₹90" },
  { name: "Chocolate Mousse", type: "Dessert", category: "desserts", image: "./assets/chocolate-mousse.jpg", desc: "Light and airy chocolate dessert with silky texture.", price: "₹130" },
  { name: "Fruit Custard", type: "Dessert", category: "desserts", image: "./assets/fruit-custard.jpg", desc: "Mixed fruits in creamy custard, refreshing and sweet.", price: "₹100" },
  { name: "Carrot Halwa", type: "Dessert", category: "desserts", image: "./assets/carrot-halwa.jpg", desc: "Traditional Indian dessert made from grated carrots and milk.", price: "₹90" },

  // Beverages
  { name: "Mango Lassi", type: "Beverage", category: "beverages", image: "./assets/mango-lassi.jpg", desc: "Refreshing yogurt-based drink with mango pulp.", price: "₹90" },
  { name: "Masala Chai", type: "Beverage", category: "beverages", image: "./assets/masala-chai.jpg", desc: "Traditional spiced tea to warm your heart.", price: "₹50" },
  { name: "Cold Coffee", type: "Beverage", category: "beverages", image: "./assets/cold-coffee.jpg", desc: "Iced coffee with a creamy, frothy finish.", price: "₹80" },
  { name: "Lemonade", type: "Beverage", category: "beverages", image: "./assets/lemonade.jpg", desc: "Fresh, tangy, and refreshing citrus drink.", price: "₹60" },
  { name: "Orange Juice", type: "Beverage", category: "beverages", image: "./assets/orange-juice.jpg", desc: "Freshly squeezed orange juice full of vitamin C.", price: "₹70" },
  { name: "Mint Mojito", type: "Beverage", category: "beverages", image: "./assets/mint-mojito.jpg", desc: "Refreshing mint-flavored mocktail.", price: "₹90" },
  { name: "Hot Chocolate", type: "Beverage", category: "beverages", image: "./assets/hot-chocolate.jpg", desc: "Warm, creamy chocolate drink, perfect for winters.", price: "₹80" },
  { name: "Iced Tea", type: "Beverage", category: "beverages", image: "./assets/iced-tea.jpg", desc: "Chilled tea with lemon and sugar, refreshing summer drink.", price: "₹60" },
  { name: "Coffee Latte", type: "Beverage", category: "beverages", image: "./assets/coffee-latte.jpg", desc: "Smooth espresso mixed with steamed milk.", price: "₹90" },
  { name: "Strawberry Smoothie", type: "Beverage", category: "beverages", image: "./assets/strawberry-smoothie.jpg", desc: "Blended strawberries with yogurt, healthy and sweet.", price: "₹100" },
  { name: "Coconut Water", type: "Beverage", category: "beverages", image: "./assets/coconut-water.jpg", desc: "Natural and refreshing drink straight from coconut.", price: "₹50" },
  { name: "Apple Juice", type: "Beverage", category: "beverages", image: "./assets/apple-juice.jpg", desc: "Freshly pressed apple juice for a healthy boost.", price: "₹70" }
];

// --- Function to display recipes by category ---
function displayRecipes(category = "starters") {
  recipesContainer.innerHTML = '';
  const filtered = recipes.filter(r => r.category === category);

  filtered.forEach(recipe => {
    const div = document.createElement('div');
    div.className = 'recipe-card';
    div.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p><strong>${recipe.type}</strong> • ${recipe.desc}</p>
      <p class="price"><strong>Price:</strong> ${recipe.price}</p>
    `;
    recipesContainer.appendChild(div);
  });
}

// --- Event listeners for category buttons ---
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayRecipes(button.dataset.category);
  });
});

// --- Initial display ---
displayRecipes("starters");
categoryButtons.forEach(button => {
  if (button.dataset.category === "starters") {
    button.classList.add('active');
  }
});

// --- Dish of the Day ---
function displayDishOfTheDay() {
  const randomDish = recipes[Math.floor(Math.random() * recipes.length)];
  featuredContainer.innerHTML = `
    <img src="${randomDish.image}" alt="${randomDish.name}">
    <h3>${randomDish.name}</h3>
    <p><strong>${randomDish.type}</strong> • ${randomDish.desc}</p>
    <p class="price"><strong>Price:</strong> ${randomDish.price}</p>
  `;
}

// --- Call Dish of the Day ---
displayDishOfTheDay();

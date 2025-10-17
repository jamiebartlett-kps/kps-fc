(async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  try {
    const res = await fetch(`/apps/recipe/${slug}`);
    if (!res.ok) throw new Error('Recipe not found');

    const recipe = await res.json();
    renderRecipe(recipe);
  } catch (err) {
    document.getElementById("recipe-container").innerText = 'Recipe not found.';
    console.error(err);
  }
})();

function renderRecipe(data) {
    // Header
    document.getElementById('recipe-title').textContent = data.title;
    document.getElementById('recipe-serves').textContent = data.serves;
    document.getElementById('recipe-time').textContent = data.cookingTime;

    // Image
    const img = document.getElementById('recipe-image');
    img.src = data.imageUrl;
    img.alt = data.title;

    // Description
    document.getElementById('recipe-description').textContent = data.description;

    // Ingredients
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = data.ingredients.map(ing => {
        const quantity = ing.quantity > 0 ? `${ing.quantity}${ing.unit ? ' ' + ing.unit : ''}` : '';
        const prep = ing.preparation ? `<div class="ingredient-prep">${ing.preparation}</div>` : '';
        return `
            <div class="ingredient-item">
                <div>
                    <div class="ingredient-name">${ing.product.name}</div>
                    ${prep}
                </div>
                <div class="ingredient-quantity">${quantity}</div>
            </div>
        `;
    }).join('');

    // Instructions
    const instructionsList = document.getElementById('instructions-list');
    instructionsList.innerHTML = data.steps.map((step, index) => `
        <div class="step">
            <span class="step-number">${index + 1}</span>
            <p class="step-text">${step}</p>
        </div>
    `).join('');

    document.getElementById('recipe-wrapper').style.display = "block";
}

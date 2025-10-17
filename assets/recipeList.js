(async () => {
try {
    const res = await fetch(`/apps/recipe`);
    if (!res.ok) throw new Error('Recipe not found');

    const recipes = await res.json();
    renderGrid(recipes);
} catch (err) {
    document.getElementById("recipe-container").innerText = 'Recipe not found.';
    console.error(err);
}
})();

function renderGrid(recipes) {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    recipes.forEach(recipe => {
        const card = document.createElement('a');
        card.href = `/pages/recipe?slug=${recipe.slug}`;
        card.className = 'recipe-card';

        card.innerHTML = `
            <img src="${recipe.imageUrl}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div>
                    ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="recipe-meta">
                    <div class="meta-item">
                        <span class="meta-icon">⏱</span>
                        <span>${recipe.cookingTime}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">👥</span>
                        <span>${recipe.serves}</span>
                    </div>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}
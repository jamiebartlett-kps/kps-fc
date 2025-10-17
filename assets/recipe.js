(async () => {
  const slug = window.recipeSlug;

  try {
    const res = await fetch(`/apps/recipe/${slug}`);
    if (!res.ok) throw new Error('Recipe not found');

    const recipe = await res.json();
    alert(recipe.description);
    document.getElementById("recipe-container").innerHTML = `
      <h1>${recipe.title}</h1>
      <p>${recipe.description}</p>
      <img src="${recipe.image}" alt="${recipe.title}" />
    `;
  } catch (err) {
    document.getElementById("recipe-container").innerText = 'Recipe not found.';
    console.error(err);
  }
})();

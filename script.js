const recipes = [
    {
        name: "トマトパスタ",
        ingredients: [
            { name: "パスタ", amount: 100, unit: "g" },
            { name: "トマト", amount: 1, unit: "個" },
            { name: "オリーブオイル", amount: 1, unit: "大さじ" },
            { name: "にんにく", amount: 1, unit: "片" },
            { name: "塩", amount: 1, unit: "小さじ" },
        ],
        instructions: "1. パスタを茹でる\n2. フライパンでにんにくとオリーブオイルを熱する\n3. トマトを加えて炒める\n4. 茹でたパスタを加えて塩で味を調える"
    },
    // 他のレシピを追加...
];

function renderRecipes(filteredRecipes = recipes) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';
    
    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md p-6';
        card.innerHTML = `
            <h2 class="text-2xl font-bold text-orange-600 mb-4">${recipe.name}</h2>
            <h3 class="text-lg font-semibold text-orange-500 mb-2">材料：</h3>
            <ul class="mb-4">
                ${recipe.ingredients.map(ing => `
                    <li>
                        <span class="ingredient-name">${ing.name}</span>: 
                        <span class="ingredient-amount">${ing.amount}</span>
                        <span class="ingredient-unit">${ing.unit}</span>
                    </li>
                `).join('')}
            </ul>
            <h3 class="text-lg font-semibold text-orange-500 mb-2">作り方：</h3>
            <p class="whitespace-pre-line">${recipe.instructions}</p>
        `;
        recipeList.appendChild(card);
    });
}

function filterRecipes() {
    const searchTerm = document.getElementById('ingredientSearch').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm))
    );
    renderRecipes(filteredRecipes);
}

function updateServings() {
    const servings = parseInt(document.getElementById('servings').value);
    document.querySelectorAll('.ingredient-amount').forEach(el => {
        const originalAmount = parseFloat(el.getAttribute('data-original-amount') || el.textContent);
        el.textContent = (originalAmount * servings).toFixed(2);
    });
}

document.getElementById('ingredientSearch').addEventListener('input', filterRecipes);
document.getElementById('servings').addEventListener('input', updateServings);

// 初期表示
renderRecipes();

// オリジナルの分量を保存
document.querySelectorAll('.ingredient-amount').forEach(el => {
    el.setAttribute('data-original-amount', el.textContent);
});
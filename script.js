// レシピデータ（実際にはサーバーから取得します）
const recipes = [
    { id: 1, name: '卵サンドウィッチ', image: 'tomato-pasta.jpg', ingredients: ['食パン', '卵', 'マヨネーズ', '塩コショウ'] },
    { id: 2, name: 'ハムチーズサンドウィッチ', image: 'stir-fry.jpg', ingredients: ['食パン', 'ハム', 'チーズ', 'マーガリン'] },
    { id: 3, name: 'ネギ塩豚丼', image: 'stir-fry.jpg', ingredients: ['米', '水', '豚', '長ネギ', 'にんじん', 'ごま油', '酒', '鶏がらスープの素', '塩'] },
    { id: 4, name: 'ワカメスープ', image: 'stir-fry.jpg', ingredients: ['水', 'わかめ', '鶏がらスープの素', '白ごま', '塩', '醤油', 'ごま油'] },
    { id: 5, name: 'お茶漬け', image: 'stir-fry.jpg', ingredients: ['米', '水', '鮭フレーク', '昆布だし', 'のり', '青ネギ'] },
    { id: 6, name: 'おにぎり（チュモッパ）', image: 'stir-fry.jpg', ingredients: ['米', '大葉', '水', 'たくあん', 'のり', '塩ごま', 'ごま油', 'マヨネーズ'] },
    // 他のレシピ...
];

// レシピカードを生成する関数
function createRecipeCard(recipe) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card" data-recipe-id="${recipe.id}">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                    <a href="recipe.html?id=${recipe.id}" class="btn btn-primary">詳細を見る</a>
                </div>
            </div>
        </div>
    `;
}

// レシピカードを表示
const recipeCardsContainer = document.getElementById('recipeCards');
recipes.forEach(recipe => {
    recipeCardsContainer.innerHTML += createRecipeCard(recipe);
});

// 検索機能
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
    );
    recipeCardsContainer.innerHTML = '';
    filteredRecipes.forEach(recipe => {
        recipeCardsContainer.innerHTML += createRecipeCard(recipe);
    });
});

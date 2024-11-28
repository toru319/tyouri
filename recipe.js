document.addEventListener('DOMContentLoaded', function() {
    // URLからIDを取得
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = parseInt(urlParams.get('id'));
    
    // レシピデータを取得して表示
    const recipe = recipesData.find(r => r.id === recipeId);
    if (recipe) {
        displayRecipe(recipe);
    }
    
    // 人数入力の変更イベントを設定
    const servingsInput = document.getElementById('servingsInput');
    if (servingsInput) {
        servingsInput.addEventListener('input', () => updateServings(recipe));
    }
});

// レシピデータ（実際にはサーバーから取得します）
const recipesData = [
    {
        id: 1,
        name: '卵サンドウィッチ',
        allergen: ' ',
        ingredients: [
            { name: '8枚切り食パン', amount: 2, unit: '枚', price: 49.75 },
            { name: '卵', amount: 1, unit: '個', price: 22.8 },
            { name: 'マヨネーズ', amount: 5, unit: 'g', price: 64.4 },
            { name: '塩コショウ', amount: 0, unit: '適量', price: 0 },
        ],
        instructions: [
            '①卵はゆでてつぶす',
            '②つぶした卵にマヨネーズと塩こしょうを加えて混ぜる',
            '③パンにはさむ',
        ],
    },
    {
        id: 2,
        name: 'ハムチーズサンドウィッチ',
        allergen: ' ',
        ingredients: [
            { name: '8枚切り食パン', amount: 2, unit: '枚', price: 49.75 },
            { name: 'ハム', amount: 1, unit: '枚', price: 0 },
            { name: 'チーズ', amount: 1, unit: '枚', price: 0 },
            { name: 'マーガリン', amount: 5, unit: 'g', price: 0 },
        ],
        instructions: [
            '①パンにマーガリンを塗る',
            '②ハムとチーズを用意する',
            '③パンにはさむ',
        ],
    },
    {
        id: 3,
        name: 'ネギ塩豚丼',
        allergen: ' ',
        ingredients: [
            { name: '米', amount: 120, unit: 'g', price: 42.636 },
            { name: '水', amount: '', unit: '適量', price: 0 },
            { name: '豚こま切れ肉', amount: 20, unit: 'g', price: 73.83 },
            { name: '長ネギ', amount: 20, unit: 'g', price: 23.4 },
            { name: 'にんじん', amount: 20, unit: 'g', price: 5.81 },
            { name: 'ごま油', amount: 4, unit: 'g', price: 5.81 },
            { name: '酒', amount: 7, unit: 'g', price: 1.491 },
            { name: '鶏がらスープの素', amount: 0.7, unit: 'g', price: 2.1105 },
            { name: '塩', amount: 0.5, unit: 'g', price: 0.183 },
        ],
        instructions: [
            '①ねぎ：みじん切りにする',
            '②鍋にごま油を入れて熱し、中火で炒める',
            '③肉の色が変わったら酒、鶏がらスープの素、塩を加えて水分を飛ばしながら炒める',    
        ],
    },
    
    {
        id: 4,
        name: 'ワカメスープ',
        allergen: ' ',
        ingredients: [
            { name: '水', amount: 200, unit: 'ml', price: 0 },
            { name: 'わかめ', amount: 3, unit: 'g', price: 15.42 },
            { name: '鶏がらスープの素', amount: 5, unit: 'g', price: 15.075 },
            { name: '白ごま', amount: 2, unit: 'g', price: 3.293 },
            { name: '塩', amount: 2, unit: 'g', price: 0.732 },
            { name: '醤油', amount: 1, unit: 'ml', price: 0.247 },
            { name: 'ごま油', amount: 2, unit: 'ml', price: 2.905 },
        ],
        instructions: [
            '①水を入れて熱する',
            '②鶏がらスープの素、白ごま、醤油、ごま油、わかめを加える',
        ],
    },

    {
        id: 5,
        name: 'お茶漬け',
        allergen: ' ',
        ingredients: [
            { name: '米', amount: 100, unit: 'g', price: 35.53 },
            { name: '水', amount: '', unit: '適量', price: 0 },
            { name: '鮭フレーク', amount: 12, unit: 'g', price: 58.08 },
            { name: '昆布だし', amount: 5, unit: 'g', price: 18.214 },
            { name: 'きざみのり', amount: 2, unit: 'g', price: 41.75 },
            { name: '青ネギ', amount: 2, unit: 'g', price: 10.88 },
        ],
        instructions: [
            '①水を入れて熱する',
            '②鮭フレーク、昆布だし、きさみのり、青ネギを加える',
            '③米を加えて熱する',
            '④熱した水を入れて熱する',   
        ],
    },

    {
        id: 6,
        name: 'おにぎり（チュモッパ）',
        allergen: ' ',
        ingredients: [
            { name: '米', amount: 180, unit: 'g', price: 63.954 },
            { name: '大葉', amount: 2, unit: '枚', price: 10.6 },
            { name: '水', amount:  '', unit: '適量', price: 0 },
            { name: 'たくあん', amount: 30, unit: 'g', price: 129.67 },
            { name: '韓国海苔', amount: 3, unit: '枚', price: 6.66 },
            { name: '白ごま', amount: 2, unit: 'g', price: 3.293 },
            { name: 'ごま油', amount: 4, unit: 'g', price: 15.49 },
            { name: 'マヨネーズ', amount: 5, unit: 'g', price: 4.025 },
        ],
        instructions: [
            '①たくあん：細かく刻む、韓国海苔：細かくちぎる、大葉：5mm幅に切る',
            '②米を炊く',
            '③炊きあがった米にすべての材料を混ぜ合わせる',
            '④にぎる',
        ],
    },
];

function displayRecipe(recipeData) {
    // レシピ名とアレルゲン情報の表示
    document.getElementById('recipeName').textContent = recipeData.name;
    document.getElementById('allergen').textContent = `アレルゲン: ${recipeData.allergen || 'なし'}`;

    // 材料リストの表示
    const ingredientsList = document.getElementById('ingredients');
    ingredientsList.innerHTML = '';
    recipeData.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = `${ingredient.name}: ${ingredient.amount}${ingredient.unit} (${ingredient.price}円)`;
        ingredientsList.appendChild(li);
    });

    // 作り方の表示
    const instructionsList = document.getElementById('instructions');
    instructionsList.innerHTML = '';
    recipeData.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    // 初期の合計金額を計算して表示
    updateTotalPrice(recipeData);
}

function updateServings(recipeData) {
    const servings = parseInt(document.getElementById('servingsInput').value) || 1;
    document.getElementById('servings').textContent = servings;

    const ingredientsList = document.getElementById('ingredients');
    ingredientsList.innerHTML = '';

    recipeData.ingredients.forEach(ingredient => {
        const newAmount = isNaN(ingredient.amount) ? ingredient.amount : (ingredient.amount * servings / 2).toFixed(2);
        const newPrice = (ingredient.price * servings / 2).toFixed(2);        
        const li = document.createElement('li');
        li.textContent = `${ingredient.name}: ${newAmount}${ingredient.unit} (${newPrice}円)`;
        ingredientsList.appendChild(li);
    });

    updateTotalPrice(recipeData);
}

function updateTotalPrice(recipeData) {
    const servings = parseInt(document.getElementById('servingsInput').value) || 1;
    const totalPrice = recipeData.ingredients.reduce((sum, ingredient) => sum + (ingredient.price * servings) / 2, 0);
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

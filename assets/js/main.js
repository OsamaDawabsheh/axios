
async function getData() {
    const response = await axios('https://forkify-api.herokuapp.com/api/search?q=cake');
    const { recipes , count } = await response.data;

    document.querySelector('.title').innerHTML = `${count} Cake Recipes`;
    const result = recipes.map( function (recipe) {
        return `
            <div class="cake">
                <h3>${recipe.title}</h3>
                <img src="${recipe.image_url}" alt="" />
                <a href="./details.html?id=${recipe.recipe_id}">show recipe</a>
            </div>
        `
    }
    ).join('');
    document.querySelector('.cakes').innerHTML = result;
}

getData();

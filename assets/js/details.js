const urlParams = new URLSearchParams(window.location.search);

    
async function getData() {
    const response = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${urlParams.get('id')}`);
    const {recipe} = await response.data;
    console.log(recipe);

    document.querySelector('.cake-details img').src = recipe.image_url;
    document.querySelector('.cake-details h2').innerHTML = recipe.title;

    const ingredients = recipe.ingredients;

    const result = ingredients.map(function (ingredient) {

        return `
            <li>${ingredient}</li>
        `
    }).join('\n');
    
    document.querySelector('.cake-details ol').innerHTML = result;
}

getData();
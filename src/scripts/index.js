// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { jsonRecipes } from './data.js';

// \/ All of your javascript should go here \/

// console.log(jsonRecipes);

// get sections for recipe
const cakesContainer = document.querySelector("#cakes");
const biscuitsContainer = document.querySelector("#biscuits");
const breadContainer = document.querySelector("#bread");


// convert data
let parsedRecipes = JSON.parse(jsonRecipes);
// console.log(parsedRecipes);


// traverse data
for (let recipe in parsedRecipes) {
    // console.log(parsedRecipes[recipe]);

    let recipes = parsedRecipes[recipe];

    // get data items
    recipes.map(recipeType => {
        // console.log(recipeType.title);
        let recipeTypes = recipeType.type;
        let recipeTitles = recipeType.title;
        let recipeAuthors = recipeType.author;
        let recipeIngredients = recipeType.ingredients;
        let recipeImages = recipeType.image;

        // cakes
        if (recipeTypes === "cakes") {
            createContent(recipeImages, recipeTitles, recipeAuthors, recipeIngredients, cakesContainer);
        }

        // biscuits
        if (recipeTypes === "biscuits") {
            createContent(recipeImages, recipeTitles, recipeAuthors, recipeIngredients, biscuitsContainer);
        }

        // bread
        if (recipeTypes === "bread") {
            createContent(recipeImages, recipeTitles, recipeAuthors, recipeIngredients, breadContainer);
        }
    });
}

// create recipe content
function createContent(img, title, author, ingredients, container) {
    // image
    const imgR = document.createElement("img");
    imgR.src = img;
    imgR.width = 300;
    imgR.height = 250;

    // title
    const titleR = document.createElement("h2");
    titleR.innerHTML = title;

    // author
    const authorR = document.createElement("p");
    authorR.innerHTML = author;
    authorR.classList.add("author");

    // ingredients
    const ingredientsR = document.createElement("p");
    ingredientsR.innerHTML = "Ingredients: " + ingredients.join(", ");

    // div
    const div = document.createElement("div");
    div.classList.add("inner-container");
    div.appendChild(imgR);
    div.appendChild(titleR);
    div.appendChild(authorR);
    div.appendChild(ingredientsR);

    // append div to recipe container
    container.appendChild(div);
}

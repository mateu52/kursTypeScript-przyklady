import { Category } from "./types/types.js";
import { render } from './helpers/render-tasks.helper.js'; //dodajemy rozszerzenie JS zamiast ts
import { renderCategories } from "./helpers/render.categories.helper.js";
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.GYM,
    Category.HOBBY,
    Category.WORK
];
const tasks = [
    {
        name: "Wyrzcić śmieci",
        done: false,
    }, {
        name: "Pójść na siłkę",
        done: true,
        category: Category.GYM
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: Category.GENERAL
    }
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);

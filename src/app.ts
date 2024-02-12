import { Task, Category } from "./types/types.js"
import { render } from './helpers/render-tasks.helper.js' //dodajemy rozszerzenie JS zamiast ts
import { renderCategories } from "./helpers/render.categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");
let selectedCategory: Category;

const categories: Category[] = [
    Category.GENERAL, 
    Category.GYM, 
    Category.HOBBY, 
    Category.WORK
];


const tasks: Task[] = [
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

const addTask = (task: Task) => {
    tasks.push(task);
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value , done: false, category: selectedCategory });
    render(tasks, tasksContainerElement);
});

renderCategories(categories, categoriesContainerElement, updateSelectedCategory)
render(tasks, tasksContainerElement)
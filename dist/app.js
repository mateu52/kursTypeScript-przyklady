// <li>
//                 <label for="task-1">Wyrzucić śmieci</label>
//                 <input type="text" name="" id="task-1">
//             </li>
//wyrzucic smieci
//pojscie na siłownie
// nakarmić koty
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        name: "Wyrzcić śmieci",
        done: false,
    }, {
        name: "Pójść na siłkę",
        done: true,
        category: "gym"
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: "general"
    }
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const renderCategories = () => {
    categories.forEach(category => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(labelElement);
        categoryElement.appendChild(radioInputElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
    render();
});
renderCategories();
render();

// <li>
//                 <label for="task-1">Wyrzucić śmieci</label>
//                 <input type="text" name="" id="task-1">
//             </li>
//wyrzucic smieci
//pojscie na siłownie
// nakarmić koty
const taskNameInputElement: HTMLElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button')
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');

const tasks: string[] = ["Wyrzcić śmieci", "Pójść na siłkę", "Nakarmić koty"];

const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement: HTMLElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    })
}
const addTask = (task: string) => {
    tasks.push(task);
}
addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    tasks.push(taskNameInputElement.value);
    render();
})
render()
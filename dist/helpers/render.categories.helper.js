const handleCategoryChange = (category) => {
    if (category === "general") {
        console.log("zmiana na general");
    }
    else if (category === "gym") {
        alert("Lecisz na silke!");
    }
    else if (category === "work") {
        console.log("zmiana na work");
    }
    else if (category === "hobby") {
        console.log("zmiana na hobby");
    }
    else {
        const never = category;
        //mozna przypisac 'never' pod 'category' poniewaz nigdy nie bedzie uzyty
        //uzylismy wyzej wszystkie możliwe warunki wykonania
    }
};
export const renderCategories = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach(category => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(labelElement);
        categoryElement.appendChild(radioInputElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const add = (v1, v2) => v1 + v2;

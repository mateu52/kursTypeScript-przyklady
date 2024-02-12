import { Category } from "../types/types";

const handleCategoryChange = (category: Category) => {
    if ( category === "general"){
        console.log("zmiana na general")
    }else if( category === "gym"){
        alert("Lecisz na silke!")
    }else if ( category === "work"){
        console.log("zmiana na work")
    }else if ( category === "hobby"){
        console.log("zmiana na hobby")
    }else {
        const never: never = category;
        //mozna przypisac 'never' pod 'category' poniewaz nigdy nie bedzie uzyty
        //uzylismy wyzej wszystkie możliwe warunki wykonania
    }
}

export const renderCategories = (
    categories: Category[], 
    categoriesContainerElement: HTMLElement, 
    inputChangeCallback: (category: Category) => void
    ) => {
    categories.forEach(category => {
        const categoryElement: HTMLElement = document.createElement("li");
    
        const radioInputElement: HTMLInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category"
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        })

        const labelElement: HTMLLabelElement = document.createElement("label")
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(labelElement)


        categoryElement.appendChild(radioInputElement)
        categoriesContainerElement.appendChild(categoryElement);
    })
}

const add = (v1: number, v2: number) => v1 + v2;
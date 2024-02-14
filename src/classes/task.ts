class TaskClass {
    name: string = "nowe zadanie";
    done: boolean = true
    constructor(name: string, done: boolean){ //nadpisuje wartości domyślne
        this.name = name
        this.done = done
        console.log("constructor!")
    }
}


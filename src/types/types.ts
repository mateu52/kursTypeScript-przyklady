export interface Task {
    name: string;
    done: boolean;
    category?: Category;
}
export enum Category {
    GENERAL = 'general',
    WORK = 'work',
    GYM = 'gym',
    HOBBY = 'hobby',
    //domyslnie przybierają wartości od 0..1,2,3..
}

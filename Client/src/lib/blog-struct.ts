export interface BlogStruct {
    id: number;
    dateCreated: Date;
    user: String;
    title: String;
    author: String;
    content: String;
}

export interface titleStruct {
    title: String;
    dateCreated: Date;
}

export interface reduceStruct {
    content: String;
}

export const dateFormat = (date: Date) => {
    return (
        date.getDate().toString() +
        "/" +
        (date.getMonth() + 1).toString() +
        "/" +
        date.getFullYear().toString()
    );
};

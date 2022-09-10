import { BlogStruct } from "./blog-struct";
export default class useBlogs {
    static getBlog(blogId: number) {
        let x: BlogStruct = {
            id: 69,
            author: "Xavier",
            content:
                "WWWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so mad",
            dateCreated: new Date("August 19, 1975 23:15:30"),
            user: "XavXavier",
            title: "This is so cool and its a test",
        };
        return x;
    }

    static formatApiResponce(notFormatedArray: any) {
        let formatedBlog: BlogStruct = {
            id: notFormatedArray["id"],
            author: notFormatedArray["author"],
            content: notFormatedArray["content"],
            dateCreated: new Date(notFormatedArray["datecreated"]),
            title: notFormatedArray["title"],
            user: notFormatedArray["user"],
        };
        return formatedBlog;
    }

    static async getBlogs() {
        // const apiURL = `http://${window.location.host}/api/blogs`; //TODO: Get rid of debug in production
        const apiURL = `http://${window.location.hostname}:8080/api/blogs`;
        const responce = await fetch(apiURL);
        const res = await responce.json();
        const blogs: BlogStruct[] = [];

        res.forEach((value: any, key: any) => {
            blogs.push(this.formatApiResponce(value));
        });

        return blogs;
    }
}

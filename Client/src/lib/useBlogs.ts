import { BlogStruct } from "./blog-struct";
export default class useBlogs {
    static url = `${process.env.REACT_APP_URL}`;

    static async getBlog(blogId: number) {
        const apiURL = `${useBlogs.url}/api/blog/${blogId}`; //TODO: Get rid of debug in production
        const responce = await fetch(apiURL);
        const res = await responce.json();
        const blog: BlogStruct = await this.formatApiResponce(res);
        return blog;
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
        const apiURL = `${useBlogs.url}/api/blogs`; //TODO: Get rid of debug in production
        const responce = await fetch(apiURL);
        const res = await responce.json();
        const blogs: BlogStruct[] = [];

        res.forEach((value: any, key: any) => {
            blogs.push(this.formatApiResponce(value));
        });

        return blogs;
    }
}

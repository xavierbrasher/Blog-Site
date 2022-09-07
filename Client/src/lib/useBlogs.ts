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
    static getBlogs() {
        return [useBlogs.getBlog(5)];
    }
}

import { useEffect, useState } from "react";
import BlogPreview from "./components/blogPreview";
import { BlogStruct } from "./lib/blog-struct";
import useBlogs from "./lib/useBlogs";

let testBlogProp: BlogStruct = {
    id: 69,
    author: "Xavier",
    content:
        "WWWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madWow this is crazy i am so madow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madWow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so madow this is crazy i am so mad Wow this is crazy i am so mad Wow this is crazy i am so mad",
    dateCreated: new Date("August 19, 1975 23:15:30"),
    user: "XavXavier",
    title: "This is so cool and its a test",
};

export default function App() {
    let [blogs, setBlogs] = useState<BlogStruct[]>([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getData() {
            return await useBlogs.getBlogs();
        }
        getData().then((value) => {
            setBlogs(value);
            setLoading(false);
        });
    }, []);

    const RenderBlogs = () => {
        if (!loading) {
            console.log(blogs);
            return (
                <div>
                    {blogs.map((value) => {
                        return <BlogPreview {...value} />;
                    })}
                </div>
            );
        } else {
            return (
                <h2 className="text-center text-5xl font-bold mb-6">Loading</h2>
            );
        }
    };

    return (
        <div className="mt-3">
            <h1 className="text-center text-7xl font-bold mb-6">Blog-Site</h1>
            {loading ? (
                <h2 className="text-center text-5xl font-bold mb-6">
                    Loading ...
                </h2>
            ) : (
                <RenderBlogs />
            )}
        </div>
    );
}

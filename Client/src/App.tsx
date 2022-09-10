import { useEffect, useState } from "react";
import BlogPreview from "./components/blogPreview";
import { BlogStruct } from "./lib/blog-struct";
import useBlogs from "./lib/useBlogs";

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
            return (
                <div>
                    {blogs.map((value) => {
                        return <BlogPreview key={value.id} {...value} />;
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

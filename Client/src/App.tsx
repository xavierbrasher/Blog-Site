import BlogPreview from "./components/blog";
import { BlogStruct } from "./lib/blog-struct";

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
    return (
        <div className="mt-3">
            <h1 className="text-center text-7xl font-bold mb-6">Blog-Site</h1>
            <BlogPreview {...testBlogProp} />
            <BlogPreview {...testBlogProp} />
            <BlogPreview {...testBlogProp} />
            <BlogPreview {...testBlogProp} />
            <BlogPreview {...testBlogProp} />
            <BlogPreview {...testBlogProp} />
            <BlogPreview {...testBlogProp} />
            <BlogPreview {...testBlogProp} />
        </div>
    );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogStruct, dateFormat, titleStruct } from "./lib/blog-struct";
import useBlogs from "./lib/useBlogs";

const Title = ({ title, dateCreated }: titleStruct) => {
    return (
        <div className="mx-4">
            <div className="inline">
                <h1 className="text-4xl font-bold inline text-left mr-7">
                    {title}
                </h1>
                <p className="float-right">{dateFormat(dateCreated)}</p>
            </div>
            <hr className="border-neutral" />
        </div>
    );
};

const contentStucture = (content: String) => {
    let tmp = "";
    for (let i = 0; i < content.length; i++) {
        if (i % 120 === 0 && i !== 0) {
            tmp += "\n";
        }
        tmp += content[i];
    }
    return tmp.split("\n");
};

export default function Blog() {
    let { id } = useParams();
    let [blog, setBlock] = useState<BlogStruct>();
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getBlog() {
            return await useBlogs.getBlog(parseInt(id || "1"));
        }
        getBlog().then((value) => {
            setBlock(value);
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
            {!loading && blog ? (
                <div className="flex justify-center mb-4 mt-4">
                    <div className="card border-2 border-dotted border-neutral shadow">
                        <Title
                            title={blog.title}
                            dateCreated={blog.dateCreated}
                        />
                        <p className="mx-4">By {blog.author}</p>
                        <p className="mt-1 mx-4 break-before-avoid">
                            {contentStucture(blog.content).map((content) => {
                                return (
                                    <>
                                        {content} <br />
                                    </>
                                );
                            })}
                        </p>
                    </div>
                </div>
            ) : (
                <h2 className="text-center text-5xl font-bold mb-6">
                    Loading ...
                </h2>
            )}
        </div>
    );
}

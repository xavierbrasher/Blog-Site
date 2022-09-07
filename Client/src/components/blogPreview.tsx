import { Link } from "react-router-dom";
import {
    BlogStruct,
    titleStruct,
    reduceStruct,
    dateFormat,
} from "../lib/blog-struct";

const Title = (props: titleStruct) => {
    return (
        <>
            <div className="inline">
                <h1 className="text-4xl font-bold inline text-left">
                    {props.title}
                </h1>
                <p className="float-right">{dateFormat(props.dateCreated)}</p>
            </div>
            <hr className="border-primary" />
        </>
    );
};

const ReduceText = ({ content }: reduceStruct) => {
    const limit = 300;
    let tmp = "";
    if (content.length <= limit) {
        return <p>{content}</p>;
    } else {
        for (let i = 0; i < limit; i++) {
            if (i == 100 || i == 200 || i == 300) {
                tmp += "\n";
            }
            tmp += content[i];
        }
        tmp += "...";
        return (
            <>
                <p>{tmp.split("\n")[0]}</p>
                <p>{tmp.split("\n")[1]}</p>
                <p>{tmp.split("\n")[2]}</p>
            </>
        );
    }
};

export default function BlogPreview(props: BlogStruct) {
    return (
        <div className="flex justify-center mb-4">
            <div className="card lg:card-side bg-neutral shadow-xl cursor-pointer">
                <div className="mx-4">
                    <Link to={"/blogs/" + props.id.toString()}>
                        <Title
                            title={props.title}
                            dateCreated={props.dateCreated}
                        />
                        <ReduceText content={props.content} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

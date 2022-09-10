import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
                    >
                        <li key={"blogs-link"}>
                            <Link to={"/blogs"}>Blogs</Link>
                        </li>
                        <li key={"about-link"}>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li key={"portfolio-link"}>
                            <a href="https://xavxavier.com/">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                    Blog-Site
                </Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="#bddff9"
                        viewBox="0 0 448 512"
                    >
                        <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

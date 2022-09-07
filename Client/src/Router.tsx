import { Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/header";
import About from "./About";
import Footer from "./components/footer";
import Blog from "./Blog";

export default function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs/:id" element={<Blog />} />
            </Routes>
            <div className="mt-20">
                <Footer />
            </div>
        </>
    );
}

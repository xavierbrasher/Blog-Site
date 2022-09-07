import { Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/header";
import About from "./About";
import Footer from "./components/footer";

export default function Router() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, User } from "./pages";

const App = () => {
    return (
        <div className="grid">
            <section className="fixed top-0 w-full flex bg-[#276153] p-3 shadow-md text-cream mb-14">
                NAV BAR PLACEHOLDER
            </section>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="user">
                        <Route path=":user_id" element={<User/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
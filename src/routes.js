import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main"
import Article from "./pages/Article"

const Rotas = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" component={Main}></Route>
            <Route path="/articles/:id" component={Article}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas;
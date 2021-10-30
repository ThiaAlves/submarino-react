import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Carrinho } from "./pages/Carrinho";
import { Categoria } from "./pages/Categoria";
import { Erro } from "./pages/Erro";
import { Finalizar } from "./pages/Finalizar";
import { Produto } from "./pages/Produto";
import { Pesquisa } from "./pages/Pesquisa";
import { Header, Footer } from "./components/Main"; 

export const Routes = () => {
    return(
        <BrowserRouter>
        <Header></Header>
            <div className="container">
            <Switch>
                <Route path={['/','/home']} exact component={Home}></Route>
                <Route path={'/carrinho'} component={Carrinho}></Route>
                <Route path={['/categoria', '/categoria/:id']} exact component={Categoria}></Route>
                {/* <Route path='*' exact component={Erro}></Route> */}
                <Route path={'/finalizar'} component={Finalizar}></Route>
                <Route path={['/produto', '/produto/:id']} exact component={Produto}></Route>
                <Route path={'/pesquisa'} component={Pesquisa}></Route>
            </Switch>
            </div>
        <Footer></Footer>
        </BrowserRouter>
    )
}
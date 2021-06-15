import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./apps/App";
import CadastroApp from "./apps/CadastroApp"
import lista from "./apps/Lista"

const Router = () => {
return (<BrowserRouter><Switch>
    <Route path="/" component={App} exact />
    <Route path="/App" component={App} exact />
    <Route path="/CadastroApp" component={CadastroApp} exact  />
    <Route component={() => <div>Página 404</div>} />
    </Switch>
    </BrowserRouter>)}

export default Router;
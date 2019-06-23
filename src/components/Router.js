import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Register from './Register';
import Error404 from './Error404';
import Forgot from './Forgot-password';
import Formulario from './Formulario';
import Consulta from './Consulta';
import ListaCertificado from './ListaCertificado';
import CertificadoVirtual from './CertificadoVirtual';
import Tables from './Tables';
import Cards from './Cards';
import Carreras from './Carreras';
import Promociones from './Promociones';
import EnviarSunedu from './EnviarSunedu';
import Iniciador from './Iniciador';

const Router = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" component={App} exact />
        <Route path="/home" component={Iniciador} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Register} />
        <Route path="/404" component={Error404} />
        <Route path="/forgot-password" component={Forgot} />
        <Route path="/formulario" component={Formulario} />
        <Route path="/consulta" component={Consulta} />
        <Route path="/lista-de-certificados" component={ListaCertificado} />
        <Route path="/certificado-virtual-20190622-101024" component={CertificadoVirtual} />
        <Route path="/tables" component={Tables} />
        <Route path="/Cards" component={Cards} />
        <Route path="/lista-de-carreras" component={Carreras} />
        <Route path="/promociones" component={Promociones} />
        <Route path="/enviar-a-Sunedu" component={EnviarSunedu} />
    </HashRouter>
);

    
export default Router;
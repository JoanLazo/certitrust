import React from 'react';
import { Link } from 'react-router-dom';

const Consulta = () => {

    return(

    <div className="container">
  <div className="row">
      <div className="col-12">

        <h1 className="text-black mb-2">Carreras</h1>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Derecho</h1>
            
           <Link class="btn btn-primary" to="/promociones">Entrar</Link>
         
        </div>
        </div>

        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Administración y Finanzas</h1>
            
            <Link class="btn btn-primary" to="/promociones">Entrar</Link>
        </div>
</div>

        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Arquitectura</h1>
            
            <Link class="btn btn-primary" to="/promociones">Entrar</Link>
        </div>
</div>

        <div className="jumbotron jumbotron-fluid">
        <div className="container"> 
            <h1 className="display-4">Ciencias de la Computación</h1>
            
            <Link class="btn btn-primary" to="/promociones">Entrar</Link>
        </div>
</div>

    </div>
    </div>
    </div>
  
    );
};
export default Consulta;

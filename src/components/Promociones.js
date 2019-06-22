import React from 'react';
import { Link } from 'react-router-dom';

const Promociones = () => {

    return(
 <div className="container">
    <div className="row">
        <div className="col-12">

        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Prom-2015</h1>
            
           <Link class="btn btn-primary" to="/enviar-a-Sunedu">Entrar</Link>
         
        </div>
        </div>


        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Prom-2016</h1>
            
           <Link class="btn btn-primary" to="/enviar-a-Sunedu">Entrar</Link>
         
        </div>
        </div>


        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Prom-2017</h1>
            
           <Link class="btn btn-primary" to="/enviar-a-Sunedu">Entrar</Link>
         
        </div>
        </div>


        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Prom-2018</h1>
            
           <Link class="btn btn-primary" to="/enviar-a-Sunedu">Entrar</Link>
         
        </div>
        </div>

      
</div>
</div>
</div>

    );
};
export default Promociones;
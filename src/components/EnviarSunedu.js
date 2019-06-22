import React from 'react';

const EnviarSunedu = () => {

    return(
<div className="container">
    <div className="row">
        <div className="col-12">

        <table class="table text-white">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre y Apellidos</th>
      <th scope="col">Carrera</th>
      <th scope="col">Cursos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Betsy Campos</td>
      <td>Kiara Ramos</td>
      <td>José Palacios</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Derecho</td>
      <td>Derecho</td>
      <td>Derecho</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Todos los cursos aprobados</td>
      <td>Todos los cursos aprobados</td>
      <td>Todos los cursos aprobados</td>
    </tr>
  </tbody>
</table>
      
<button className="btn btn-success">Enviar a Sunedu</button>


</div>
</div>
</div>

    );
};
export default EnviarSunedu;
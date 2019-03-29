import React from 'react';
import Job from "./job";

export default class JobsList extends React.Component {

  state = { 
  	"offers": [
  	{
  	  "id": "0001",
      "name": "Asesor comercial de hipermercado",
  	  "company": "Schneider Electric", 
  	  "salary": 4.5,
  	  "city": "Bogotá, Colombia",
      "date": "15/02/2019"
    }, 
    {
      "id": "0002",
      "name": "Desarrollador de software",
      "company": "Google Inc.", 
      "salary": 20,
      "city": "Palo Alto, CA, USA",
      "date": "23/13/2019"
      },
    ]
  };

  render() {
    return (
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre del cargo</th>
              <th scope="col">Empresa</th>
              <th scope="col">Salario</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Fecha de publicación</th>
            </tr>
          </thead>
          <tbody>
              {this.state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}
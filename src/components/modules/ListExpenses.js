import React, { Component } from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

class ListExpenses extends Component {

   render(){

      return(

         <div>
            <div>
               <table className="uk-table uk-table-small">
                  <thead>
                     <tr>
                        <th>Gasto</th>
                        <th>Costo</th>
                     </tr>
                  </thead>
                  <tbody>
                     {Object.keys(this.props.listExpenses).map( key => (

                        <Expense 
                           key={key}
                           expense = {this.props.listExpenses[key]} />
                     ))}
                  </tbody>
               </table>
            </div>

         </div>

      )
   }
}

ListExpenses.propTypes = {
   listExpenses : PropTypes.object.isRequired,
}

export default ListExpenses
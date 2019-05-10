import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expense extends Component {

   render(){

      const {name, cost} = this.props.expense;

      return(
         
         <tr>
            <td>{name}</td>
            <td>
               <span className="uk-badge">
                  {cost}
               </span>
            </td>
         </tr>
      )
   }
}

Expense.propTypes = {
   expense : PropTypes.object.isRequired
}

export default Expense
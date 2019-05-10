import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormExpense extends Component {


   nameExpense = React.createRef();
   costExpense = React.createRef();


   createExpense = (e) => {

      e.preventDefault();

      const expense = {
         name: this.nameExpense.current.value,
         cost: this.costExpense.current.value
      }      
      
      this.props.addExpense(expense);
      
      e.currentTarget.reset();
   
   }


   render(){

      return(

         <div>
            <form onSubmit={this.createExpense}>
               <div className="uk-form-controls">
                  <label>Nombre del Gasto</label>
                  <input className="uk-input" type="text" ref={this.nameExpense} placeholder="Ej. Pago Factura Luz"/>
               </div>
               <div className="uk-form-controls">
                  <label>Costo del Gasto</label>
                  <input className="uk-input" type="text" ref={this.costExpense} placeholder="Ej. 50000" />
               </div>

               <button className="uk-button uk-button-secondary uk-width-1-1@m">Agregar</button>
            </form>

         </div>
      )
   }

}

FormExpense.propTypes = {
   addExpense : PropTypes.func.isRequired,
}


export default FormExpense
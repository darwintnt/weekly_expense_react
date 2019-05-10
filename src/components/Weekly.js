import React, { Component } from 'react';
import '../css/weekly.css';
import FormExpense from './modules/FormExpense';
import ListExpenses from './modules/ListExpenses';
import {validarPresupuesto} from '../helpers';
import EstimateControl from './modules/EstimateControl';

class Weekly extends Component {

   state = {
      estimate : '',
      remaining : '',
      expense : {}
   }

   componentDidMount() {

      this.getEstimate();

   }

   getEstimate = () => {

      let estimate = prompt('Por favor ingrese su presupuesto!');

      let result = validarPresupuesto(estimate);

      if(result){
         this.setState({
            estimate: estimate,
            remaining: estimate
         })
      } else {
         this.getEstimate();
      }

      
   }

   addExpense = expense => {

      // tomar una copia del state actual
      const expenses = {...this.state.expense};

      // agregar gasto al objeto del state
      expenses[`expense${Date.now()}`] = expense;

      // insertarlo en el state
      this.setState({
         expense: expenses,
      });

      // Reducir del presupuesto restante

      this.subtractExpense(expense.cost);
      
   }

   subtractExpense = cost => {

      let remaining = String(this.state.remaining - cost);

      this.setState({
         remaining : remaining
      })

   }

   
   render(){

      return(

         <div className="uk-container container">

            <h2 className="title">Gasto Semanal</h2>
            <div className="uk-card uk-card-default uk-padding">
               <div className="uk-child-width-1-2@m uk-grid">
                  <div>
                     <p className="sub-title">Agrega tus gastos aquí</p>
                     <FormExpense
                        addExpense = {this.addExpense}                     
                     />
                  </div>
                  <div>
                     <p className="sub-title">Mi Listado</p>
                     <ListExpenses
                        listExpenses = {this.state.expense}                   
                     />

                  <EstimateControl
                     estimate={this.state.estimate}
                     remaining={this.state.remaining}
                  />
                  </div>

                  
               </div>           

            </div>


         </div>


      )
   }


}


export default Weekly

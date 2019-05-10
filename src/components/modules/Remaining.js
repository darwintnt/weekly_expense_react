import React, { Component } from 'react';
import { revisarPresupuesto } from '../../helpers';
import PropTypes from 'prop-types';

class Remaining extends Component {

   render(){

      let estimate = this.props.estimate;
      let remaining = this.props.remaining;

      return(         

         <div className={ revisarPresupuesto(estimate,remaining) }>
            <p>Restante: {this.props.remaining}</p>
         </div>           

      )
   }
}

Remaining.propTypes = {
   remaining : PropTypes.string.isRequired,
}

export default Remaining
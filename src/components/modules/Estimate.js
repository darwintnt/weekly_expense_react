import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Estimate extends Component {

   render(){

      return(         

         <div className="uk-alert uk-alert-primary uk-padding-small">
            <p>Presupuesto: {this.props.estimate}</p>
         </div>           

      )
   }

}

Estimate.propTypes = {
   estimate : PropTypes.string.isRequired,
}

export default Estimate
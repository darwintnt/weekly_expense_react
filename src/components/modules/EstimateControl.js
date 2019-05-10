import React, { Component } from 'react';
import Remaining from './Remaining';
import Estimate from './Estimate';
import PropTypes from 'prop-types';

class EstimateControl extends Component {

   render(){

      return(

         <div>
            <Estimate 
               estimate={this.props.estimate}
            />
            <Remaining 
               estimate={this.props.estimate}
               remaining={this.props.remaining} 
            />
         </div>
         
      )
   }
}

EstimateControl.propTypes = {
   estimate : PropTypes.string.isRequired,
   remaining : PropTypes.string.isRequired
}

export default EstimateControl
export const validarPresupuesto = presupuesto => {

   let totalPresupuesto = parseInt(presupuesto, 10)|| 0;

   if(totalPresupuesto > 0 ) {
       return totalPresupuesto;
   } else {
       return false;
   }
}

export const revisarPresupuesto = (presupuesto,restante) => {
   let clase;
   // Comprobar el 25% 
   if( (presupuesto / 4) > restante) {
        clase = 'uk-alert uk-alert-danger uk-padding-small';
   } else if( (presupuesto / 2) > restante) {
       clase = 'uk-alert uk-alert-warning uk-padding-small'
   } else {
       clase = 'uk-alert uk-alert-success uk-padding-small';
   }
   return clase;
} 

// Test suite
describe('Example Component', () => {

  test( 'Debe de ser mayor a 10', () => {

      // Arreglar
      let value = 11;

      // Estímulo
      value = value + 2

      // Observar resultado esperado.
      expect( value ).toBeGreaterThan(10)     
     
      // if( value > 10 ){
      //   // TODO: todo bien!
      // }else{
      //   throw `${ value } no es mayor a 10`
      // }

  } )

})
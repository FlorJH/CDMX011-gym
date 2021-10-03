 //split divide un string en array en este caso cada'' osea cada que encuentra una letra nueva sin espacios entre ellas
          //reduce ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor, recibe 3 parametros valor anterior, actualr (el valor de cada letra) e indice

          function romanToInt(s) {
        
       
            if(validarCadena(s) == true){
         
               return s.split('').reduce((total, val, idx) => {
         
          roman[val] < roman[s[idx + 1]] ? total -= roman[val] : total += roman[val];
          return total
        },0) //el 0 es el valor inicial que tendra el total, total actua como acumulador
            }
           
          }
      
      function validarCadena(cadena){
          let comparacion=0;
          Array.from(cadena).forEach(comparar => {
              if(roman.hasOwnProperty(comparar) == true){
                  comparacion++;
              }
              })
        
          if(comparacion != cadena.length ){
            console.log('cadena invalida')
              return false
          }
          return true
          
      }
      
      let roman = {
           I: 1,
           V: 5,
           X: 10,
           L: 50,
           C: 100,
           D: 500,
           M: 1000
      
      }
      
      
      
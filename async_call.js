//callback:funcion que se ingreas como parametro de uso

// modos de dependencia en es6js
//commonjs
//module :


const request = require('request')

//hacer una request(peticion) con request(libreria)
const url = 'https://rickandmortyapi.com/api/character'

request(url,
     { json:true }, 
        (err , respuesta , body) => {

            
            body.results.forEach((personajes) => {
                console.log(personajes.name)
                console.log("-----------")

            }
         )
     } )

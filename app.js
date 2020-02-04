let edad=prompt('Ya alcanzas el timbre?')
let nombre=prompt('Cual es tu nombre?')
let trabajadores={nombreTrabajor:'Jose Luis',
                    Direccion:'En su casa',
                    puesto:'Gerente'
}

let tecnologia=['y','y','y']
let vacio=[]
tecnologia.map((tech)=>{
    
    return vacio.push(tech.replace('y', '1'))
    
})
console.warn(tecnologia)
console.log(vacio)

console.log(edad)
console.log(nombre)
console.log(edad+nombre)
console.log(trabajadores)
if(edad>18){
    document.getElementById('imprimir').innerHTML=`Hola ${nombre} tu edad ${edad} tienes una oferta de 2 chelas al precio de 1, el Gerente es: ${trabajadores.nombreTrabajor} `

}
else{
    document.getElementById('imprimir').innerHTML=`${nombre} no puedes entrar`
}

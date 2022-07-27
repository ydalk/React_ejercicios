// es una función qu epermite memorizar un componente en caso de que este 
//se encuentre dentro de un que contenga mayor funcionalidad y evita que se 
//renderice innecesariamente si esta siendo afectado el estado del padre y no el de él mismo
import {memo} from 'react'
//el memo recibe como argumento su componente
//el uso más común es React.memo() 
export const Small = memo(({value}) => {

    console.log('me volvi a dibujar');
  return (
    <small> { value } </small>
  )
})

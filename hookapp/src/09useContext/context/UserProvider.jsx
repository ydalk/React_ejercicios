import { useState } from "react"
import { UserContext } from "./UserContext"

//cualquier componente podra usar o consumir la inforamcion que pase en el value
// const user = {
//     id: 123,
//     name: 'Carolina Porras',
//     email: 'caro@gmailcom'
// }

//tienen en las props los children
export const UserProvider = ({ children }) => {
    
    const [ user, setUser] = useState();


  return (
    
// .Provider permite proveer toda la información que el Context va a proveerle al arbol de componentes
// el value es la información que cualquier hijo del userProvider va a poder acceder del contexto
    <UserContext.Provider  value= {{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

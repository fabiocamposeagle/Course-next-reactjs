import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {
    const [numero , setNumero] = useState(0)
    //forma abaixo de incrementando e decramentar valor quando clicar no botao
    // - 1 exemplo
    /*    function inc() {
        setNumero(numero + 1)
    }
    function dec() {
        setNumero(numero - 1)
    } 
    */
    // 2 exemplo mais curto usando hero function
    const inc = () => setnumero(numero + 1)
    const dec = () => setNumero(numero - 1)


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
          <h1>Contador</h1>
          <NumeroDisplay numero={numero}/>
          <div> {/* com a div botei um botao do lado do outro */}
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
          </div>
          
        </div>  
    )
}
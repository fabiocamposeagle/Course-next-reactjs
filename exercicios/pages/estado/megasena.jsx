import { useEffect, useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"


export default function megasena() {

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])
    /* mechendo no estado da aplicação usando userEffect,
    uma funcionalidade que gera um efeito,useEffect, um efeito
    colateral a mudanca de um estado de um componete 
    dentro de uma forma segura sem ficar gerando renderizaçoes repetidas

     */
    useEffect(() => {
      setNumeros(mega())
    }, [])

    function renderizarNumeros() { 
      return numeros.map(
         numero => <NumeroDisplay key={numero} numero={numero}/> )
    }
    /* vou fazer uma conversao entre o nmero e component NumeroDisplay */
    return (
       <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}>
              <h1>Mega Sena</h1>
              <div style={{
                display: "flex",
                justifyContent: "center", 
                flexWrap: "wrap" /* usa para quebra de linha */
              }}>
                {renderizarNumeros()}
           </div>
           <div>
              <input type="number" min={6} max={20} value={qtde}
                  onChange={ev => setQtde(+ev.target.value)} />
              <button onClick={() => setNumeros(mega(qtde))}>
                Gerar Aposta
              </button>
           </div>
       </div>
    )
}
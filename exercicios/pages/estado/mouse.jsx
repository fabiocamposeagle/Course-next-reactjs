import { useState } from "react"
/* Exemplo de Componente com estado */
export default function mouse() {
    const [x, setX] = useState(0) 
    // REACT HOOKS ALGUMA FORMA DE USAR O RECUSO
    // COMPONENTE BASEADO EM FUNCAO, 
    // CONHECIDO  COMO COMPONENTE  FUNCIONAL
    /* 
    - LiNHA 4 uma forma curta,
     array é a const */

    const arrayY = useState(0)/* vou receber uma array com duas resposta */
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
      display: "flex", 
      flexDirection: "column",// quebra de linha, as divs ficam alinhados um em cima do outro 
      justifyContent: "center",
      alignItems: "center", // alinhamento da do texto da div
      backgroundColor: "#222",
      color: "#fff",
      height: "100vh" // altura preenchinento total
    }

    function quandoMover(ev) {
        setX(ev.clientX)
        alterarY(ev.clientY)
    }

    return (
       <div style={estilo} onMouseMove={quandoMover}>
          <span>Eixo X: {x}</span> 
          <span>Eixo Y: {y}</span>
          {/* na linha 22 e 23 vou interpolar
           a variavelcom chave */}
       </div>
    )
}
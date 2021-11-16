import { useState } from "react"

export default function formulario() {
    const [valor, setValor] = useState("")

    function alterarInput() {
        setValor(valor + "!")
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <span>{valor}</span> {/* o span reflete o valor digitado */}
            <input type="text" value={valor}
                onChange={e => setValor(e.target.value)} />
                {/* onChange componente controlado */}
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}
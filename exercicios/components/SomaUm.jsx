export default function SomaUm(props) {
    // props.numero++ 
    // as propriedades são Somente Leitura
    return (
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}
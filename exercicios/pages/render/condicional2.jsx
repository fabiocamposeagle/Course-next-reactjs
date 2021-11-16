import If from "../../components/If";

export default function condicional1() {
  const numero = 6
    return (
        <div>
          {/*  renderizando uma condicao se o numero é par  */}
            <If teste={numero % 2 === 0}>
                <h1>O número {numero} è par</h1>
            </If>
            <If teste={numero % 2 === 1}>
                <h1>O número {numero} è ìmpar</h1>
            </If>
        </div>
    )
}
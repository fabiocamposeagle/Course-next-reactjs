// NO EXPORT E IMPORT SÃO OS SISTEMAS DE MODULOS DO ECMASCRIPT 
// ESSE SAÕ EXEMPLOS DE COMPONENTES FUNCIONAIS 
// PARA VOCE  ESCOLHER NAS SUAS APLICAÇOES 
export function Comp1() {
  return (
      <div>
          <h2>Comp #01</h2>
      </div>
  )
}

export const Comp2 = function() {
   return <h2>Comp #02</h2>
}

export default function Comp3() {
  return (
      <div>
          <h2>Comp #03</h2>
      </div>
  )
}
// 1 EXEMPLO: export const Comp4 = props => <h2>Comp #04</h2>

// 2 EXEMPLO
export const Comp4 = () => {
    return <h2>Comp #04</h2>
}

const Comp5 = () => <h2>Comp #05</h2>

const Comp6 = props => (
  <div>
      <h2>Comp #06 - {props.msg}</h2>
  </div>
)
// OBS POSSO EXPORTAR TUDO JUNTO NO FINAL NESSE CASO:
// SÓ EXPORTEI COMP5 E COMP6 
export {
  Comp5, Comp6,
}
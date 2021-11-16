export default function Titulo(props) {
  return props.pequeno ? (
      <>
          <p>{props.principal}</p>
          <p>{props.secundario}</p>
      </>
  ) : (// operador ternario
      <>
          <h1>{props.principal}</h1>
          <h2>{props.secundario}</h2>
      </>
  )
}
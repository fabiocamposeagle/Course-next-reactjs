export async function getServerSideProps() {  
    console.log('[Server] gerando props para o componente...')
    const resp = await fetch('http://localhost:3000/api/produtos')
    const protudos = await resp.json()
    return {
        props: { 
          protudos
        }
    }
}

export default function Dinamico2(props) {
  console.log('[Cliente] renderizando o componente...')

  function renderizarProtudos() {
      return props.protudos.map(produto => {
        return (
            <li key={produto.id}>
               {produto.id} - {produto.nome} tem preço de R${produto.preco}
            </li>
        )
      })
  }

  return (
      <div>
          <h1>Dinãmico #02</h1>
          <ul>
              {renderizarProtudos()}
          </ul>
      </div>
  )
}

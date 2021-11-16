// vou transforma em um metodo assincrono "async",linha do codigoem seguida
// vou colar a palavra await(aguardam) esperar a promise ser resolvidar 
// 1- em seguinda vou chamar um fecth passando a URL
// quando a promise for resolvida por conta do await,
// ele vai pegar o resultado da promessa, e vai armazanar em resp(resposta)
// 2- O metodo 'json' que esta dentro da resp, é um metodo que 
// vai returnar uma promise, e quando a promessa estiver resolvida 
// ele vai armazenar a resposta em produtos

export async function getStaticProps() {  
    console.log('[Server] gerando props para o componente...')
    const resp = await fetch('http://localhost:3000/api/produtos')
    const protudos = await resp.json()
    return {
        props: { 
          protudos
        }
    }
}

export default function Estatico4(props) {
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
          <h1>Estático #04</h1>
          <ul>
              {renderizarProtudos()}
          </ul>
      </div>
  )
}

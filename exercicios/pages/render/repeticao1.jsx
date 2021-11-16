export default function repeticao1() {
  const listaAprovados = [
      'João',
      'Maria',
      'Ana',
      'Bia',
      'Carlos',
      'Daniel',
      'Laura',
  ]
// Nas linhas dos nomes acima retornamos
// uma lista string para uma lista na linha 14 para  elemento
// do tipo jsx com se fosse um li list iten 
  function renderizarLista() {
      return listaAprovados.map(function(nome, i) {
          return <li key={i}>{nome}</li>
      })
  }

  return (
      <ul>
          {renderizarLista()}
      </ul>
  )
}

// funçao map de uma array - server para transformar
// um elemento em outro .string em uma li 

// function renderizarLista() {
//     const itens = []

//     for (let i = 0; i < listaAprovados.length; i++) {
//         itens.push(<li key={i}>{listaAprovados[i]}</li>)
//     }

//     return itens
// }
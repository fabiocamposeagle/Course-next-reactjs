// com npm run build para construir a aplicacao
// depois com "npm start" para gerar um novo valor com 
// a aplicacao revalidate que gera em 7 em 7 segundo nesse exemplo
export function getStaticProps() {  
    return {
        props: { 
          revalidate: 7, // em segundos!
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
  return (
      <div>
          <h1>Estático #03</h1>
          <h2>{props.numero}</h2>
      </div>
  )
}
